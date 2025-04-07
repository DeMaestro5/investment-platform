import { Metadata } from 'next';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Register | Investment Platform',
  description: 'Create a new investment account',
};

export default async function RegisterLayout({
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
