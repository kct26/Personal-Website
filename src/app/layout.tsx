  import type { Metadata, Viewport } from 'next';
  import { Lato } from 'next/font/google';
  import './globals.css';

  // Lato - plain, humanist sans-serif with an Arial-like fallback feel.
  // next/font self-hosts it at build time: no external Google Fonts
  // request at runtime, no render-blocking <link> tag, no layout shift.
  const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lato',
    display: 'swap',
  });

  const SITE_URL = 'https://kyle-thoughts.vercel.app';
  const SITE_TITLE = 'Kyle Dang - Computer Engineering Student';
  const SITE_DESCRIPTION =
    'Portfolio of Kyle Dang, a Computer Engineering student - embedded systems, firmware, and software.';

  export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'Kyle Thoughts',
    description: SITE_DESCRIPTION,
    icons: {
      icon: '/favicon.svg',
    },
    // Controls how the site looks when linked in Slack/LinkedIn/iMessage/etc.
    openGraph: {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      siteName: 'Kyle Thoughts',
      images: ['/profile.jpg'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      images: ['/profile.jpg'],
    },
  };

  export const viewport: Viewport = {
    themeColor: '#FFFFFF',
  };

  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en" className={lato.variable}>
        <body>{children}</body>
      </html>
    );
  }
