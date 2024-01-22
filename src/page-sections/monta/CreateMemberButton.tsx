'use client';
import { createMontaMember } from '@/actions/monta/create-member';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useMontaStore } from '@/store/useMontaStore';
import { Loader } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const CreateMemberButton = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (!session) {
        router.push('/auth/login');
        return;
      }
      setIsLoading(true);

      const result = await createMontaMember();
      if (result) {
        toast({ title: '환영합니다.' });
        useMontaStore.setState({
          member: result,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      toast({ title: '서버에 문제가 발생했습니다.', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <Button
        type={'submit'}
        className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
      >
        {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
        유저 생성
      </Button>
    </form>
  );
};
