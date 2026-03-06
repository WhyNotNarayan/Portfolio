import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Narayan Ashok Gawade | Full-Stack Web3 & Cybersecurity',
  description: 'Building secure, scalable Web3 & Full-Stack solutions | IoT | Blockchain | Cybersecurity | Sindhudurg, India',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'Narayan Ashok Gawade - Portfolio',
    description: 'Full Stack Web3 & Cybersecurity Enthusiast',
    images: [{ url: 'https://narayangawade.dev/og.jpg' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-white overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}