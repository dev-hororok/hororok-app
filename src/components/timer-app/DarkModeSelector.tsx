'use client';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export const DarkModeSelector = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex justify-between items-center gap-4">
      <Button
        variant="ghost"
        className="w-full h-auto p-0"
        onClick={() => setTheme('light')}
      >
        <div className="w-full">
          <div className="items-center rounded-md p-1 hover:border-accent">
            <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
              <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                <div className="h-2 w-4/5 rounded-lg bg-[#ecedef]" />
                <div className="h-2 w-full rounded-lg bg-[#ecedef]" />
              </div>
              <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                <div className="h-2 w-full rounded-lg bg-[#ecedef]" />
              </div>
              <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                <div className="h-2 w-full rounded-lg bg-[#ecedef]" />
              </div>
            </div>
          </div>
          <span
            className={cn(
              'block w-full p-2 text-center font-semibold text-sm',
              theme === 'light' && 'text-primary'
            )}
          >
            Light
          </span>
        </div>
      </Button>
      <Button
        variant="ghost"
        className="w-full h-auto p-0"
        onClick={() => setTheme('dark')}
      >
        <div className="w-full">
          <div className="items-center rounded-md bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
            <div className="space-y-2 rounded-sm bg-slate-950 p-2">
              <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                <div className="h-2 w-4/5 rounded-lg bg-slate-400" />
                <div className="h-2 w-full rounded-lg bg-slate-400" />
              </div>
              <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-slate-400" />
                <div className="h-2 w-full rounded-lg bg-slate-400" />
              </div>
              <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-slate-400" />
                <div className="h-2 w-full rounded-lg bg-slate-400" />
              </div>
            </div>
          </div>
          <span
            className={cn(
              'block w-full p-2 text-center font-semibold text-sm',
              theme === 'dark' && 'text-primary'
            )}
          >
            Dark
          </span>
        </div>
      </Button>
    </div>
  );
};
