import { compareDesc, format, parseISO } from 'date-fns';

import { Heading, Text } from '@nxl/site/ui/typography';
import {
  Card,
  CardCta,
  CardDescription,
  CardEyebrow,
  CardTitle,
} from 'site/components/card';
import { Container } from 'site/components/layout/container';
import { PageTemplate } from 'site/components/layout/page-template';
import { Post, allPosts } from 'site/content/generated';

export const metadata = {
  title: 'Blog',
};

export default async function BlogPage() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <PageTemplate
      title={metadata.title}
      description="A blog built using Contentlayer. Posts are written in MDX."
    >
      <section className="md:border-l md:border-slate-200 md:pl-6 md:dark:border-slate-700/40">
        {posts?.length ? (
          <div className="flex max-w-3xl flex-col space-y-16">
            {posts.map((post) => (
              <BlogPost key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p>No posts published.</p>
        )}
      </section>
    </PageTemplate>
  );
}

function BlogPost({ post }: { post: Post }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <CardTitle href={post.slug}>{post.title}</CardTitle>
        <CardEyebrow
          as="time"
          dateTime={post.date}
          className="md:hidden"
          decorate
        >
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </CardEyebrow>
        <CardDescription>
          Most companies try to stay ahead of the curve when it comes to visual
          design, but for Planetaria we needed to create a brand that would
          still inspire us 100 years from now when humanity has spread across
          our entire solar system.
        </CardDescription>
        <CardCta>Read post</CardCta>
      </Card>
      <CardEyebrow
        as="time"
        dateTime={post.date}
        className="mt-1 hidden md:block"
      >
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </CardEyebrow>
    </article>
  );
}
