'use client';

import { useMontaStore } from '@/store/useMontaStore';
import { ReactNode } from 'react';

export default function MontaAppInitializer({
  member,
  children,
}: {
  member: IMontaMember | null;
  children: ReactNode;
}) {
  useMontaStore.setState({
    member,
  });

  return children;
}
