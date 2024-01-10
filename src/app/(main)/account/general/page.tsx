import { authOption } from '@/app/api/auth/[...nextauth]/route';
import { Separator } from '@/components/ui/separator';
import { EditAccountForm } from '@/page-sections/account/EditAccountForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function EditAccountPage() {
  const session = await getServerSession(authOption);
  if (!session) {
    redirect('/');
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
      </div>
      <Separator />
      <EditAccountForm user={session.user} />
    </div>
  );
}
