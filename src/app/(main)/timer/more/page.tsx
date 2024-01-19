import { DarkModeSelector } from '@/components/timer-app/DarkModeSelector';

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <ul className="px-4">
        <div className="w-full max-w-sm mx-auto py-10">
          <p className="text-base text-muted-foreground pb-4 font-semibold">
            다크모드 설정
          </p>
          <DarkModeSelector />
        </div>
        {/* DarkMode 설정 */}
        {/* 통계 확인 */}
        {/* Review */}
        {/* Report a bug */}
        {/* FAQ */}
        {/* 데이터 초기화 */}
        <li></li>
      </ul>
    </div>
  );
}
