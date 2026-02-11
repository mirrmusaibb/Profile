import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://mirrmusaibb.github.io/Profile'),
  title: {
    default: 'Profile',
    template: '%s · Profile'
  },
  description: 'A record of deliberate work. Small builds. Precise thinking.',
  openGraph: {
    title: 'Profile',
    description: 'A record of deliberate work. Small builds. Precise thinking.',
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
