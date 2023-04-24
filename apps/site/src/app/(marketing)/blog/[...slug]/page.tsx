import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeftIcon } from 'lucide-react';

import { getAbsoluteUrl } from '@nxl/site/common';
import { Heading } from '@nxl/site/ui/typography';
import { Container } from 'site/components/layout/container';
import { Mdx } from 'site/components/mdx';
import { allPosts } from 'site/content/generated';

type PostPageProps = {
  params: {
    slug: string[];
  };
};

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const url = process.env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set('heading', post.title);
  ogUrl.searchParams.set('type', 'Blog Post');
  ogUrl.searchParams.set('mode', 'dark');

  return {
    title: post.title,
    // description: post.description,
    // authors: post.authors.map((author) => ({
    //   name: author,
    // })),
    // openGraph: {
    //   title: post.title,
    //   description: post.description,
    //   type: 'article',
    //   url: absoluteUrl(post.slug),
    //   images: [
    //     {
    //       url: ogUrl.toString(),
    //       width: 1200,
    //       height: 630,
    //       alt: post.title,
    //     },
    //   ],
    // },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: post.title,
    //   description: post.description,
    //   images: [ogUrl.toString()],
    // },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <Container as="article" className="relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/blog"
        className="absolute left-[-200px] top-14 hidden items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900 xl:inline-flex"
      >
        <ChevronLeftIcon className="mr-2 h-4 w-4" />
        See all posts
      </Link>
      <div>
        {post.date && (
          <time dateTime={post.date} className="block text-sm text-slate-600">
            Published on {post.date}
          </time>
        )}
        <h1 className="mt-2 inline-block text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
          {post.title}
        </h1>
        <Heading as="h1" size="5xl">
          {post.title}
        </Heading>
      </div>
      {/* {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900"
          priority
        />
      )} */}
      <Mdx code={post.body.code} />
      <hr className="my-4 border-slate-200" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          <ChevronLeftIcon className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </Container>
  );
}
