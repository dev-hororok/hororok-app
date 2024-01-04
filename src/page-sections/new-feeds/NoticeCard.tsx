import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDateKST } from '@/lib/date-format';
import { MessageCircleWarning } from 'lucide-react';

export const NoticeCard = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex">
        <CardTitle className="flex items-center gap-2">
          <MessageCircleWarning className="w-5 h-5" />
          공지사항
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-1">
          <h3 className="text-xl font-bold">호로로로록</h3>
          <p className="text-xs text-muted-foreground">
            {formatDateKST(new Date())}
          </p>
        </div>
        <p className="text-sm text-foreground/90">Hororok 개발중...</p>
      </CardContent>
    </Card>
  );
};
