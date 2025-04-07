import { Metadata } from 'next';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Login | Investment Platform',
  description: 'Sign in to your investment account',
};

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (userId) {
    redirect('/');
  }

  return <>{children}</>;
}
