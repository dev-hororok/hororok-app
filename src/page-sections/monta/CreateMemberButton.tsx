'use client';
import { createMontaMember } from '@/actions/monta/create-member';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Loader } from 'lucide-react';
import { useState } from 'react';

export const CreateMemberButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const result = await createMontaMember();
      console.log(result);
      if (result) {
        toast({ title: '환영합니다.' });
        // 유저 등록 (zustand)
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
