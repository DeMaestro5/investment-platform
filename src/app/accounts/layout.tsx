import { Metadata } from 'next';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Account Dashboard | Investment Platform',
  description: 'View and manage your investment account',
};

export default async function AccountsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect('/login');
  }

  return <>{children}</>;
}
