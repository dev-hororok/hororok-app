'use server';
import { dummyEggInventory } from '@/data/monta/inventoryData';
import authOption from '@/lib/authOption';
import { getApiUrl } from '@/lib/getApiUrl';
import { IEggInventory } from '@/models/monta/egg.model';
import { getServerSession } from 'next-auth';

export const fetchEggInventory = async (member_id: string) => {
  const session = await getServerSession(authOption);
  const apiUrl = getApiUrl(`members/${member_id}/egg-inventory`, 'monta_nest');
  if (!session) return [];
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });
    const data: { data: { egg_inventory: IEggInventory[] } } =
      await response.json();

    return dummyEggInventory;
    // return data.data.egg_inventory;
  } catch (e) {
    console.log('Error fetching data', e);
    return [];
  }
};
