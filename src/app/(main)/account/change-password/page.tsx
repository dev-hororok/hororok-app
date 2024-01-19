import authOption from '@/lib/authOption';
import { ChangePasswordForm } from '@/page-sections/account/ChangePasswordForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function ChangePasswordPage() {
  const session = await getServerSession(authOption);
  if (!session) {
    redirect('/');
  }
  return (
    <div>
      <ChangePasswordForm user={session.user} />
    </div>
  );
}
