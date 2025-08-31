import { getSortedPostsData } from '@/lib/content';

interface BlogProps {
  allPostsData: Array<any>;
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData('blogs');
  return {
    props: {
      allPostsData,
    },
  };
}

export default function ({ allPostsData }: BlogProps) {
  return (
    <>
      <div className="flex justify-start">
        I wrote about everything I have learned, almost all of them are about computer kind of stuff.
      </div>

      <div className="my-5 border border-dashed border-gray-100"></div>

      <div className="mt-5 flex justify-start">
        <div className="grid grid-cols-1 w-full">
          {allPostsData &&
            allPostsData.map((item: any, index: number) => (
              <div className="inline-flex mb-2 items-center" key={index}>
                <a className="hover:cursor-pointer" href={`/post/${item.id}`}>
                  <span className="underline">{item.title}</span>
                  <span className="mx-2">-</span>
                  <span className="text-foreground-light">{item.description}</span>
                </a>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
