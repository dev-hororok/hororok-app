import { LandingSection_1 } from '@/page-sections/landing-page/LandingSection_1';
import { LandingSection_2 } from '@/page-sections/landing-page/LandingSection_2';

export default function Home() {
  return (
    <main className="flex w-full max-w-screen-2xl min-h-screen flex-col mx-auto">
      <LandingSection_1 />
      <LandingSection_2 />
    </main>
  );
}
