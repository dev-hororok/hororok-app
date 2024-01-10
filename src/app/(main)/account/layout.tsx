import AccountLayout from '@/components/layouts/AccountLayout';

export default function AccountCommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AccountLayout>{children}</AccountLayout>;
}
