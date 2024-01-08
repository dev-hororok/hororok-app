'use server';
import { cookies } from 'next/headers';
import { loginFormSchema } from './login.validation';

const BASE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth`;

export async function loginAction(formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  const { email, password } = loginFormSchema.parse(values);

  const response = await fetch(`${BASE_API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const result = await response.json();

  if (result.success) {
    cookies().set('accessToken', result.data.access_token);
  }

  return result;
}
