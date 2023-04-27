import { PageTemplate } from 'site/components/layout/page-template';

export const metadata = {
  title: 'Stack',
};

export default async function StackPage() {
  return (
    <PageTemplate
      title={metadata.title}
      description="Bullet proof and scalable stack for your next project."
    >
      <section>Projects</section>
    </PageTemplate>
  );
}
