'use server';
import { IAccount } from './../../models/account.model';
import authOption from '@/lib/authOption';
import { getApiUrl } from '@/lib/getApiUrl';
import { getServerSession } from 'next-auth';

export const fetchMe = async () => {
  const session = await getServerSession(authOption);
  // const apiUrl = getApiUrl('accounts/me'); // 원래
  const apiUrl = getApiUrl('auth/me', 'monta_nest');

  if (!session) return null;
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });
    const data: { data: IAccount } = await response.json();
    return data.data;
  } catch (e) {
    console.log('Error fetching data', e);
    return null;
  }
};
