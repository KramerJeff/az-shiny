import Image from "next/image";
import Link from "next/link";
import { getSortedPostsData, PostData } from "@/lib/posts";
import { GetStaticProps } from "next";
import Head from "next/head";

interface HomeProps {
  allPostsData: PostData[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }: HomeProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col gap-12 py-32 px-16 bg-white dark:bg-black">
          <div>
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
          </div>

          <section className="flex flex-col gap-6">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Blog
            </h1>
            <ul className="flex flex-col gap-4">
              {allPostsData.map(({ id, date, title }) => (
                <li key={id} className="flex flex-col gap-1">
                  <Link
                    href={`/posts/${id}`}
                    className="text-xl font-medium text-zinc-950 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
                  >
                    {title}
                  </Link>
                  <small className="text-sm text-zinc-600 dark:text-zinc-400">
                    {date}
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
