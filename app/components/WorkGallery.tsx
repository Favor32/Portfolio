"use client";

import { useState } from "react";
import Image from "next/image";
import MediaLightbox from "./MediaLightbox";

const skills = [
  {
    name: "Bio Revamp",
    description: "Refreshed profile bios written to communicate brand identity clearly and attract the right audience.",
    media: [
      { type: "photo", src: "/gallery/bio-revamp/photo_7_2026-08-30_03-44-48.jpg", alt: "Bio revamp sample" },
      { type: "photo", src: "/gallery/bio-revamp/photo_8_2026-08-30_03-43-54.jpg", alt: "Bio revamp sample" },
      { type: "photo", src: "/gallery/bio-revamp/photo_8_2026-08-30_03-47-26.jpg", alt: "Bio revamp sample" },
      { type: "photo", src: "/gallery/bio-revamp/photo_13_2026-08-31_13-16-54.jpg", alt: "Bio revamp sample" },
    ],
  },
  {
    name: "Page Revamp",
    description: "Full page makeovers covering visuals, layout and messaging for a more polished brand presence",
    media: [
      { type: "photo", src: "/gallery/page-revamp/photo_6_2026-08-30_03-43-53.jpg", alt: "Page revamp sample" },
      { type: "photo", src: "/gallery/page-revamp/photo_11_2026-08-30_03-43-54.jpg", alt: "Page revamp sample" },
    ],
  },
  {
    name: "Content Calendar",
    description: "Structured content calendars keeping posting consistent, organised and aligned with strategy",
    media: [
      { type: "photo", src: "/gallery/content-calender/photo_16_2026-08-31_13-16-55.jpg", alt: "Content calendar sample" },
    ],
  },
  {
    name: "Carousel",
    description: "Multi-slide carousel posts designed to educate, engage and hold attention scroll after scroll.",
    media: [
      { type: "photo", src: "/gallery/carousel/photo_3_2026-08-31_13-16-54.jpg", alt: "FACO sample" },
      { type: "photo", src: "/gallery/carousel/photo_4_2026-08-31_13-16-54.jpg", alt: "FACO sample" },
      { type: "photo", src: "/gallery/carousel/photo_5_2026-08-31_13-16-54.jpg", alt: "FACO sample" },
      { type: "photo", src: "/gallery/carousel/photo_6_2026-08-31_13-16-54.jpg", alt: "FACO sample" },
      { type: "photo", src: "/gallery/carousel/photo_7_2026-08-31_13-16-54.jpg", alt: "FACO sample" },
      { type: "photo", src: "/gallery/carousel/photo_8_2026-08-31_13-16-54.jpg", alt: "FACO sample" },
      { type: "photo", src: "/gallery/carousel/photo_9_2026-08-31_13-16-54.jpg", alt: "FACO sample" },
      { type: "photo", src: "/gallery/carousel/photo_10_2026-08-31_13-16-54.jpg", alt: "FACO sample" },
      { type: "photo", src: "/gallery/carousel/photo_11_2026-08-31_13-16-54.jpg", alt: "FACO sample" },
      { type: "photo", src: "/gallery/carousel/photo_12_2026-08-31_13-16-54.jpg", alt: "FACO sample" },
    ],
  },
  {
    name: "Carousels",
    description: "Multi-slide carousel posts designed to educate, engage and hold attention scroll after scroll.",
    media: [
      { type: "photo", src: "/gallery/carousels/photo_3_2026-08-30_03-47-24.jpg", alt: "O Gadgets sample" },
      { type: "photo", src: "/gallery/carousels/photo_4_2026-08-30_03-47-25.jpg", alt: "O Gadgets sample" },
      { type: "photo", src: "/gallery/carousels/photo_5_2026-08-30_03-45-58.jpg", alt: "O Gadgets sample" },
      { type: "photo", src: "/gallery/carousels/photo_6_2026-08-30_03-45-58.jpg", alt: "O Gadgets sample" },
    ],
  },
  {
    name: "Graphic Design",
    description: "Graphics, carousels and branded visual content",
    media: [
      { type: "photo", src: "/gallery/graphic-design/photo_1_2026-08-30_03-47-24.jpg", alt: "Graphic design sample" },
      { type: "photo", src: "/gallery/graphic-design/photo_1_2026-08-31_13-16-53.jpg", alt: "Graphic design sample" },
      { type: "photo", src: "/gallery/graphic-design/photo_2_2026-08-30_03-47-24.jpg", alt: "Graphic design sample" },
      { type: "photo", src: "/gallery/graphic-design/photo_9_2026-08-30_03-45-58.jpg", alt: "Graphic design sample" },
    ],
  },
  {
    name: "Analytics & Reporting",
    description: "Tracking performance and turning data into insights",
    media: [
      { type: "photo", src: "/gallery/analytics/photo_5_2026-08-30_03-43-53.jpg", alt: "Analytics report sample" },
      { type: "photo", src: "/gallery/analytics/photo_9_2026-08-30_03-44-48.jpg", alt: "Analytics report sample" },
      { type: "photo", src: "/gallery/analytics/photo_10_2026-08-30_03-43-54.jpg", alt: "Analytics report sample" },
      { type: "photo", src: "/gallery/analytics/photo_15_2026-08-31_13-16-55.jpg", alt: "Analytics report sample" },
    ],
  },
  {
    name: "AI & Creative Content",
    description: "AI powered creative tools supporting ideation and visual development",
    media: [
     
      { type: "video", src: "/gallery/ai-content/IMG_4826.MP4", alt: "AI-generated content sample" },
    ],
  },
  {
  name: "Testimonials",
    description: "Client testimonials turned into shareable social proof that builds trust with new audiences",
    media: [
      { type: "photo", src: "/gallery/testimonials/photo_7_2026-08-30_03-47-26.jpg", alt: "Testimonials sample" },
    ],
  },
  {
    name: "Video Editing & Voiceover",
    description: "Sample edited video and voiceover work",
    media: [
      { type: "video", src: "/gallery/video-editing-voiceover/IMG_4701.MOV", alt: "Voiceover sample" },
      { type: "video", src: "/gallery/video-editing-voiceover/IMG_4793.MP4", alt: "Edited video sample" },
      { type: "video", src: "/gallery/video-editing-voiceover/IMG_4813.MP4", alt: "Edited video sample" },
    ],
  },
];

export default function WorkGallery() {
  const [lightbox, setLightbox] = useState<{ media: typeof skills[0]["media"]; index: number } | null>(null);

  return (
    <div className="space-y-16 mt-16">
      {skills.map((skill) => (
        <div key={skill.name}>
          <h3 className="font-serif font-bold text-xl">{skill.name}</h3>
          {skill.description && <p className="text-muted text-sm mb-4">{skill.description}</p>}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 mt-2">
            {skill.media.map((item, i) => (
              <button
                key={item.src}
                onClick={() => setLightbox({ media: skill.media, index: i })}
                className="relative shrink-0 w-56 aspect-[9/16] snap-start rounded-2xl overflow-hidden"
              >
                {item.type === "photo" ? (
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                ) : (
                  <video src={item.src} muted className="w-full h-full object-cover pointer-events-none" />
                )}
              </button>
            ))}
          </div>
        </div>
      ))}

      {lightbox && (
        <MediaLightbox
          media={lightbox.media}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}