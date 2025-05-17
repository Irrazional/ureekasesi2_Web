import { Afacad } from "next/font/google";
const afacad = Afacad({
  subsets: ["latin"],
});

export default function About() {
  return (
    <div
      className={`flex flex-col items-center justify-items-center p-5 pb-10 gap-5 sm:p-20 font-[500] ${afacad.className}`}
    >
      <h1 className="text-4xl font-[600] text-purple-500 font-[700] font-[Afacad Flux]">
        About Me
      </h1>
      <div className="h-0.5 w-[5rem] bg-white rounded-3xl"></div>
      <p className="text-lg font-[500] text-center px-50">
        I am a passionate Computer Science major with a keen interest in web
        development and creative design. I enjoy exploring innovative
        technologies and finding ways to blend functionality with aesthetics.
        Currently, I am diving deeper into Next.js and TypeScript, while also
        staying curious about Database technologies. I am motivated to create
        impactful and visually engaging digital experiences
      </p>
    </div>
  );
}
