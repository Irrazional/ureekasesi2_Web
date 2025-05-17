import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">
        Welcome to <span className="text-blue-500">Sesi 2</span>
      </h1>
      <p className="text-lg text-center">This is the about page of Sesi 2.</p>

      <Button>TEST</Button>
    </div>
  );
}
