import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'Project Atlas',
    template: '%s · Project Atlas'
  },
  description: 'A refined mega repository website showcasing products, platforms, and experiments.',
  openGraph: {
    title: 'Project Atlas',
    description: 'A calm and futuristic project ecosystem built with Next.js.',
    type: 'website'
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export const viewport: Viewport = {
  themeColor: '#10131A'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
