import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trigub Tech - AI & Software Solutions',
  description: 'From strategy to architecture and implementation. AI consulting and LLM development services by Filipp Trigub.',
  keywords: 'AI, LLM, Machine Learning, Software Development, RAG, ChatBot, Consulting',
  authors: [{ name: 'Filipp Trigub' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}