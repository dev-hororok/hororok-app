import { AccountSideNav } from '../sidenav/AccountSideNav';

const sidebarNavItems = [
  {
    title: 'Account',
    href: '/account/general',
  },
  {
    title: 'Change Password',
    href: '/account/change-password',
  },
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col items-center max-w-screen-lg mx-auto">
      <AccountSideNav items={sidebarNavItems} />
      <div className="w-full pt-6">{children}</div>
    </div>
  );
}
