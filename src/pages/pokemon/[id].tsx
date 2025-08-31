import { getAllPostIds, getPostData } from '@/lib/content';
import moment from 'moment';
import { GetStaticPathsResult } from 'next';

export async function getStaticProps({ params }: { params: any }) {
  // Add the "await" keyword like this:
  const postData = await getPostData('pokemon', params.id);

  postData.date = moment(postData.date).format('MMM Do, YYYY');

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = getAllPostIds('pokemon');
  return {
    paths,
    fallback: false,
  };
}

export default function (props: any) {
  return (
    <>
      <div className="mt-10 flex justify-between items-center">
        <p className="text-2xl font-semibold text-foreground">{props.postData.title}</p>
      </div>
      <div className="mt-2 flex justify-start">
        <p className="text-base text-black-0">{props.postData.description}</p>
      </div>

      <div className="my-5 border border-dashed border-gray-200"></div>

      <div className="content pokemon" dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }} />
    </>
  );
}
