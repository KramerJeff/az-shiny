import Image from "next/image";
import Link from "next/link";
import { getSortedPostsData, PostData, getAllTags } from "@/lib/posts";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";

interface HomeProps {
  allPostsData: PostData[];
  allTags: string[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allPostsData = getSortedPostsData();
  const allTags = getAllTags();
  return {
    props: {
      allPostsData,
      allTags,
    },
  };
};

export default function Home({ allPostsData, allTags }: HomeProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearAllTags = () => {
    setSelectedTags([]);
  };

  const filteredPosts =
    selectedTags.length > 0
      ? allPostsData.filter((post) =>
          selectedTags.every((tag) => post.tags?.includes(tag))
        )
      : allPostsData;
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

            {/* Tag Filter */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Filter by tags:
                </span>
                {selectedTags.length > 0 && (
                  <button
                    onClick={clearAllTags}
                    className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 underline transition-colors"
                  >
                    Clear all ({selectedTags.length})
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedTags.includes(tag)
                        ? "bg-zinc-950 text-white dark:bg-zinc-50 dark:text-black"
                        : "bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts List */}
            <ul className="flex flex-col gap-4">
              {filteredPosts.map(({ id, date, title, tags }) => (
                <li key={id} className="flex flex-col gap-2">
                  <Link
                    href={`/posts/${id}`}
                    className="text-xl font-medium text-zinc-950 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
                  >
                    {title}
                  </Link>
                  <div className="flex items-center gap-3 flex-wrap">
                    <small className="text-sm text-zinc-600 dark:text-zinc-400">
                      {date}
                    </small>
                    {tags && tags.length > 0 && (
                      <div className="flex gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
