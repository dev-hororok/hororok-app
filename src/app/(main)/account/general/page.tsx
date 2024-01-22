import { fetchMe } from '@/actions/account/fetch-me';
import { Separator } from '@/components/ui/separator';
import { EditAccountForm } from '@/page-sections/account/EditAccountForm';
import { redirect } from 'next/navigation';

export default async function EditAccountPage() {
  const account = await fetchMe();

  if (!account) {
    redirect('/auth/login');
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
      </div>
      <Separator />
      <EditAccountForm account={account} />
    </div>
  );
}
