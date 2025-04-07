import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investment Platform',
  description: 'Modern investment platform with real-time data',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='overflow-x-hidden'>
      <body className='overflow-x-hidden'>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
