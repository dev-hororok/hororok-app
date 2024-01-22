'use server';
import authOption from '@/lib/authOption';
import { getApiUrl } from '@/lib/getApiUrl';
import { IEgg } from '@/models/monta/egg.model';
import { getServerSession } from 'next-auth';

export const fetchShopEggs = async () => {
  const session = await getServerSession(authOption);
  const apiUrl = getApiUrl('eggs', 'monta_nest');
  if (!session) return [];
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });
    const data: { data: { eggs: IEgg[] } } = await response.json();

    return data.data.eggs;
  } catch (e) {
    console.log('Error fetching data', e);
    return [];
  }
};
