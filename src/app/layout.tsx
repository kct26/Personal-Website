  import type { Metadata, Viewport } from 'next';
  import { Crimson_Text, DM_Sans, IBM_Plex_Mono } from 'next/font/google';
  import './globals.css';

  // next/font/google downloads and self-hosts these at build time (no
  // external Google Fonts request at runtime, no render-blocking <link>
  // tag, no layout shift while fonts load) — the CSS variable each one
  // exposes is what globals.css's --font-display/--font-body/--font-mono
  // tokens point at.
  //
  // Crimson Text — not Fraunces. Confirmed by inspecting the reference
  // site's actual computed font-family directly; it only ships weights
  // 400 (regular), 600, and 700, and its "boldness" comes from the
  // letterforms' natural thick/thin stroke contrast, not a heavy weight.
  const crimsonText = Crimson_Text({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-crimson',
    display: 'swap',
  });

  // DM Sans — not IBM Plex Sans. Also confirmed by inspecting the
  // reference's computed styles (used at both "Bold" and "Regular").
  // Loaded as a variable font so every weight already tuned per-element
  // across the site (400/450/500/600/700, etc.) renders faithfully
  // without needing to normalize each one to a fixed static weight.
  const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: 'variable',
    variable: '--font-dm-sans',
    display: 'swap',
  });

  const plexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-plex-mono',
    display: 'swap',
  });

  const SITE_URL = 'https://kyle-thoughts.vercel.app';
  const SITE_TITLE = 'Kyle Dang — Computer Engineering Student';
  const SITE_DESCRIPTION =
    'Portfolio of Kyle Dang, a Computer Engineering student — embedded systems, firmware, and software.';

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

  // Tints the mobile browser's own UI chrome (address bar area) to match
  // the page background. Set to the light color since that's always the
  // default on first visit (see ThemeToggle) — it's updated dynamically
  // by ThemeToggle itself once someone actually switches to dark mode.
  export const viewport: Viewport = {
    themeColor: '#FFFFFF',
  };

  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en" className={`${crimsonText.variable} ${dmSans.variable} ${plexMono.variable}`}>
        <body>{children}</body>
      </html>
    );
  }
