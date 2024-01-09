import { MobileLayout } from '@/components/layouts/MobileLayout';

export default function TimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MobileLayout>{children}</MobileLayout>;
}
