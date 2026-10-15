import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lijialu.com'),
  title: {
    default: '已有最难忘',
    template: '%s · 已有最难忘',
  },
  description: '三颗行星环绕一段难忘，通往学习、影像与成长。',
  icons: {
    icon: '/images/stag-mark-v1.webp',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: '/',
    siteName: '已有最难忘',
    title: '因为我脑海 已有最难忘',
    description: '沿着一颗星的轨道，进入一座世界。',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: '因为我脑海 已有最难忘',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '因为我脑海 已有最难忘',
    description: '沿着一颗星的轨道，进入一座世界。',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
