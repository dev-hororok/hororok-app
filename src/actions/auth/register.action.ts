'use server';

import { Base_Backend_URL } from './../../lib/constant';
import { registerFormSchema } from './register.validation';

export async function registerServerAction(formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  const { email, password } = registerFormSchema.parse(values);

  const response = await fetch(`${Base_Backend_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const result = await response.json();

  return result;
}
