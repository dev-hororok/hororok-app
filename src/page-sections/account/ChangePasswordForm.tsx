'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { useToast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SessionUser } from '@/models/user.model';

const changePasswordFormSchema = z.object({
  password: z
    .string()
    .min(4, {
      message: 'Name must be at least 4 characters.',
    })
    .max(100, {
      message: 'Name must not be longer than 100 characters.',
    }),
});

type ChangePasswordFormValues = z.infer<typeof changePasswordFormSchema>;

interface Props {
  user: SessionUser;
}

export const ChangePasswordForm = ({ user }: Props) => {
  const { toast } = useToast();
  const form = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(changePasswordFormSchema),
    defaultValues: {
      password: '',
    },
  });

  function onSubmit(data: ChangePasswordFormValues) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormDescription>
                비밀번호를 주기적으로 변경해주세요. (4 ~ 100글자 내외)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Update Password</Button>
      </form>
    </Form>
  );
};
