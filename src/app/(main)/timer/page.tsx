import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="px-12">
        <Image src="/monta.png" width={400} height={400} alt="monta-main" />
      </div>
    </div>
  );
}
