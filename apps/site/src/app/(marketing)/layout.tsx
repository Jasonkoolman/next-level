import { Footer } from 'site/components/layout/footer';
import { Header } from 'site/components/layout/header';
import { Main } from 'site/components/layout/main';

type MarketingLayoutProps = {
  children: React.ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main className="flex-1">{children}</Main>
      <Footer />
    </div>
  );
}
