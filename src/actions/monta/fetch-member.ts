'use server';
import authOption from '@/lib/authOption';
import { getApiUrl } from '@/lib/getApiUrl';
import { getServerSession } from 'next-auth';

export const fetchMontaSessionMember = async () => {
  const session = await getServerSession(authOption);
  const apiUrl = getApiUrl('me', 'monta_nest');
  if (!session) return null;
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });
    const data: { success: boolean; data: { member: IMontaMember } } =
      await response.json();

    return data.data.member;
  } catch (e) {
    console.log('Error fetching data', e);
    return null;
  }
};
