import { ReactNode } from 'react';
import { Header } from '../header/Header';
import { SideNav } from '../sidenav/SideNav';

interface Props {
  children: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className="flex relative w-full pt-24 px-2 bg-red-200">
        <SideNav />
        <div className="px-6 w-full">{children}</div>
      </div>
    </div>
  );
};
