import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';

import { Mdx } from 'site/components/mdx';
import { Post, allPosts } from 'site/content/generated';

export const metadata = {
  title: 'Blog',
};

export default async function BlogPage() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-slate-600">
            A blog built using Contentlayer. Posts are written in MDX.
          </p>
        </div>
      </div>
      <hr className="my-8 border-slate-200" />
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post: any, idx: any) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  );
}

function PostCard(post: Post) {
  return (
    <div className="mb-6">
      <time dateTime={post.date} className="block text-sm text-slate-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <h2 className="text-lg">
        <Link href={post.slug} className="text-blue-700 hover:text-blue-900">
          {post.title}
        </Link>
      </h2>
      <Mdx code={post.body.code} />
    </div>
  );
}
