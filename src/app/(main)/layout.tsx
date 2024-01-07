import { AppLayout } from '@/components/layouts/AppLayout';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}
