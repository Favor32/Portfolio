import Image from "next/image";
import { site } from "@/data/site";
import SocialLinks from "../ui/SocialLinks";

export default function AboutSection() {
  return (
    <section className="bg-cream">
      <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="px-6 py-16 md:px-10 lg:py-28 lg:pl-16 lg:pr-14 xl:pl-24 2xl:pl-40">
          <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight">
            About me
          </h1>
          <p className="mt-4 text-lg text-copper">
            {site.name}, {site.role}
          </p>

          <p className="mt-10 max-w-xl text-lg leading-relaxed">
            I&rsquo;m Paul Omowunmi Bisola, a Social Media Manager focused on
            helping businesses build a strong and purposeful presence online.
          </p>

          <p className="mt-10 max-w-xl border-l-2 border-accent pl-6 font-serif text-2xl italic leading-snug">
            &ldquo;I combine strategy, creativity and data to help brands
            communicate their value, connect with their target audience and
            maintain a consistent digital presence.&rdquo;
          </p>

          <p className="mt-10 max-w-xl leading-relaxed text-muted">
            From developing content strategies and planning content to creating,
            managing and analysing social media performance, I approach every
            project with intention.
          </p>

          <SocialLinks className="mt-10 text-chocolate" />
        </div>

        <div className="relative aspect-[4/5] bg-taupe sm:aspect-[5/4] lg:aspect-auto lg:min-h-[40rem]">
          <Image
            src="/profile.png"
            alt="Paul Omowunmi Bisola"
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
