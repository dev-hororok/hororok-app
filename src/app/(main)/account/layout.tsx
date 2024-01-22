import AccountLayout from '@/components/layouts/AccountLayout';
import authOption from '@/lib/authOption';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function AccountCommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOption);

  if (!session) {
    redirect('/auth/login');
  }

  return <AccountLayout>{children}</AccountLayout>;
}
