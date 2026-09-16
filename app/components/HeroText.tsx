"use client";

import { useState } from "react";
import Link from "next/link";
import TypewriterText from "./TypewriterText";

export default function HeroText() {
  const [step, setStep] = useState(0);

  return (
    <div>
      <h1 className="font-serif font-bold text-4xl md:text-5xl">
        <TypewriterText text="Paul Omowunmi Bisola" speed={100} onDone={() => setStep(1)} />
      </h1>

      {step >= 1 && (
        <p className="text-accent font-medium mt-2 text-lg">
          <TypewriterText text="Social Media Manager" speed={100} onDone={() => setStep(2)} />
        </p>
      )}

      {step >= 2 && (
        <p className="mt-6 text-muted leading-relaxed max-w-md">
          <TypewriterText
            text="Building intentional digital presence for businesses that want to be seen, understood and remembered."
            speed={60}
            onDone={() => setStep(3)}
          />
        </p>
      )}

      <div className={`mt-8 flex gap-4 transition-opacity duration-700 ${step >= 3 ? "opacity-100" : "opacity-0"}`}>
        <Link href="/work" className="bg-accent text-white rounded-full px-6 py-3 font-medium hover:opacity-90 transition-opacity">
          See My Work
        </Link>
        <Link href="/services" className="border border-border rounded-full px-6 py-3 font-medium hover:bg-card transition-colors">
          What I Do
        </Link>
      </div>
    </div>
  );
}