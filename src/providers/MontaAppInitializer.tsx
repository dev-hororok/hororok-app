'use client';

import { fetchEggInventory } from '@/actions/monta/fetch-egg-inventory';
import { fetchStreak } from '@/actions/monta/fetch-streak';
import { useMontaStore } from '@/store/useMontaStore';
import { ReactNode, useEffect } from 'react';

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

  useEffect(() => {
    if (!member) return;
    const fetch = async () => {
      const eggInventory = await fetchEggInventory(member.member_id);
      const streak = await fetchStreak(member.member_id);
      useMontaStore.setState({
        egg_inventory: eggInventory,
        streak,
      });
    };
    fetch();
  }, [member]);

  return children;
}
