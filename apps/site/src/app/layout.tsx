import { Inter as FontSans } from 'next/font/google';

import { getAbsoluteUrl, siteConfig } from '@nxl/site/common';
import { Toaster } from '@nxl/site/ui/toast';
import { ThemeProvider } from 'site/components/theme-provider';
import './styles.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
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
    <html
      lang="en"
      // Suppress hydration warnings for light/dark mode, as the
      // theme is set in the browser and not known on the server.
      suppressHydrationWarning
    >
      <body className={fontSans.variable}>
        <a
          href="#content"
          className="text-sm font-semibold transition left-0 z-50 bg-border text-foreground absolute px-3 py-2 m-3 -translate-y-16 focus:translate-y-0"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
