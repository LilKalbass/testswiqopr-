import {TestimSlider} from "@/components/TestimSlider";

export default function Home() {
  return (
      <main className="py-[46px] bg-[url('/assets/bg.webp')] bg-cover z-10">
        <h1 className='leading-none pb-[70px] font-bold text-[48px] text-center'>
            Voices of Success with Sales Fortuna
        </h1>
        <TestimSlider/>
      </main>
  );
}
