import { fetchMe } from '@/actions/account/fetch-me';
import { ChangePasswordForm } from '@/page-sections/account/ChangePasswordForm';
import { redirect } from 'next/navigation';

export default async function ChangePasswordPage() {
  const account = await fetchMe();

  if (!account) {
    redirect('/auth/login');
  }

  return <div>{<ChangePasswordForm account={account} />}</div>;
}
