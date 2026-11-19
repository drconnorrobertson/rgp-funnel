import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Restoration Growth Partners | Growth Strategy for $3M+ Companies',
 description: 'Find the restoration jobs your company may be missing. Get a market analysis and book a strategy call for your $3M+ restoration business.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body>{children}</body></html>;
}
