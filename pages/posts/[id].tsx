import { getAllPostIds, getPostData, PostData } from "@/lib/posts";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

interface PostProps {
  postData: PostData;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};

export default function Post({ postData }: PostProps) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col gap-12 py-32 px-16 bg-white dark:bg-black">
          <div>
            <Link
              href="/"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
            >
              ← Back to home
            </Link>
          </div>

          <article className="flex flex-col gap-6">
            <header className="flex flex-col gap-2">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
                {postData.title}
              </h1>
              <time className="text-sm text-zinc-600 dark:text-zinc-400">
                {postData.date}
              </time>
            </header>

            <div
              className="prose dark:prose-invert prose-zinc max-w-none"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
            />
          </article>
        </main>
      </div>
    </>
  );
}
