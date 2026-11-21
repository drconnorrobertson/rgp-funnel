import type { Metadata } from 'next';
import { Roboto, Figtree } from 'next/font/google';
import './globals.css';
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto', display: 'swap' });
const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree', display: 'swap' });
export const metadata: Metadata = {
 metadataBase: new URL('https://rgp-funnel.vercel.app'),
 alternates: { canonical: '/' },
 robots: { index: true, follow: true },
 openGraph: {
  type: 'website', siteName: 'Restoration Growth Partners', url: '/',
  title: 'Free Growth Plan for $3M+ Restoration Companies | RGP',
  description: 'Get a free market analysis and strategy call built for restoration companies doing $3M+ annually.',
 },
 twitter: {
  card: 'summary',
  title: 'Free Growth Plan for $3M+ Restoration Companies | RGP',
  description: 'Get a free market analysis and strategy call built for restoration companies doing $3M+ annually.',
 },
 title: 'Free Growth Plan for $3M+ Restoration Companies | RGP',
 description: 'Find your next growth opportunity. Get a free market analysis and strategy call built for restoration companies doing $3M+ annually.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body className={`${roboto.variable} ${figtree.variable}`}>{children}</body></html>;
}
