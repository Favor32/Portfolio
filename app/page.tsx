import Image from "next/image";
import Link from "next/link";
import HeroText from "./components/HeroText";

const highlights = [
  { title: "Social Media Management", description: "Consistent, organised and engaging presence." },
  { title: "Content Strategy", description: "Clear direction rooted in brand and audience." },
  { title: "Analytics & Reporting", description: "Data turned into useful insight." },
];

export default function Home() {
  return (
    <>
      <section className="max-w-[95rem] mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          <HeroText />

          <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-full">
            <Image src="/hero.png" alt="Paul Omowunmi Bisola" fill sizes="480px" className="object-cover object-top" priority />
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-16 md:py-24">
        <div className="max-w-[95rem] mx-auto px-6 md:px-8">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-accent">A Quick Look</h2>
          <div className="grid sm:grid-cols-3 gap-5 mt-10">
            {highlights.map((item) => (
              <div key={item.title} className="bg-white/50 rounded-2xl p-5">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-muted mt-2 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <Link href="/services" className="inline-block mt-8 text-accent font-medium hover:underline">
            See all services →
          </Link>
        </div>
      </section>
    </>
  );
}