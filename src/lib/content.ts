import fs from 'fs';
import matter from 'gray-matter';
import moment from 'moment';
import path from 'path';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const CONTENT_PATH = path.join(process.cwd(), 'content');

type ContentType = 'blogs' | 'pokemon';
const ContentPaths: Record<ContentType, string> = {
  blogs: path.join(CONTENT_PATH, 'posts'),
  pokemon: path.join(CONTENT_PATH, 'pokemon'),
};

export function getAllPostIds(contentType: ContentType) {
  const fileNames = fs.readdirSync(ContentPaths[contentType]);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(contentType: ContentType, id: string): Promise<any> {
  const fullPath = path.join(ContentPaths[contentType], `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true } as any)
    .use(rehypeRaw)
    .use(rehypeStringify)
    .use(remarkGfm)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

// credit: https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
export function getSortedPostsData(contentType: ContentType, limit?: number): Array<any> {
  // Get file names under /posts
  const fileNames = fs.readdirSync(ContentPaths[contentType]);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(ContentPaths[contentType], fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      date: matterResult.data.date,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  const sortedData = allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
  const friendlySortedData = sortedData.map((postData): any => {
    // replace datetime with "friendly" date
    // we do this after the sort so that the dates are properly sorted
    postData.date = moment(new Date(postData.date)).format('MMMM Do, YYYY');
    return postData;
  });
  return limit === null ? friendlySortedData : friendlySortedData.slice(0, limit);
}
