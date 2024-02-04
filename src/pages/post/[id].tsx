import { getAllPostIds, getPostData } from '@/lib/posts';
import moment from 'moment';
import { GetStaticPathsResult } from 'next';

export async function getStaticProps({ params }: { params: any }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  postData.date = moment(postData.date).format('MMM Do, YYYY');

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function WritingPostPage(props: any) {
  return (
    <>
      <div className="mt-10 flex justify-between items-center">
        <p className="text-2xl font-semibold text-foreground">{props.postData.title}</p>
        {/*<p className="text-sm text-foreground-100">{props.postData.date}</p>*/}
      </div>
      <div className="mt-2 flex justify-start">
        <p className="text-base text-black-0">{props.postData.description}</p>
      </div>

      <div className="my-10 border border-dashed border-gray-200"></div>

      <div className="content" dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }} />
    </>
  );
}
