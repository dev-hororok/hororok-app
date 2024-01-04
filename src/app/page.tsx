import { MyProfileCard } from '@/page-sections/new-feeds/MyProfileCard';

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col">
      <div className="flex gap-5">
        <div className="w-[380px] space-y-5 shrink-0">
          <MyProfileCard />
        </div>
        <div className="w-full bg-foreground/10">1</div>
        <div className="w-[380px] shrink-0 bg-foreground/10">g</div>
      </div>
    </main>
  );
}
