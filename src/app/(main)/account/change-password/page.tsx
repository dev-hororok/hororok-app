import { authOption } from '@/app/api/auth/[...nextauth]/route';
import { EditAccountForm } from '@/page-sections/account/EditAccountForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function ChangePasswordPage() {
  const session = await getServerSession(authOption);
  if (!session) {
    redirect('/');
  }
  return (
    <div>
      <EditAccountForm user={session.user} />
    </div>
  );
}
