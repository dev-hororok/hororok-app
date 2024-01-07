'use server';

const BASE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth`;

export async function registerAction(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  const response = await fetch(`${BASE_API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const result = await response.json();

  return result;
}
