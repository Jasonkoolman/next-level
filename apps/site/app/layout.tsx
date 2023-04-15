import { Inter as FontSans } from 'next/font/google';

import { siteConfig } from '../config/site';
import { getAbsoluteUrl } from '../utils';

import '../pages/styles.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Nx.dev',
    'Monorepo',
    'Next.js',
    'Next Auth',
    'React',
    'React Server Components',
    'Radix UI',
    'Tailwind CSS',
    'Boilerplate',
    'Production Grade',
  ],
  creator: 'Jason Koolman',
  authors: [
    {
      name: 'Jason Koolman',
      url: 'https://github.com/Jasonkoolman',
    },
  ],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: getAbsoluteUrl('/og.jpg'),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={fontSans.className}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
