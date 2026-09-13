"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

type MediaItem = { type: string; src: string; alt: string };

export default function MediaLightbox({
  media,
  startIndex,
  onClose,
}: {
  media: MediaItem[];
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const item = media[index];

  const next = () => setIndex((i) => (i + 1) % media.length);
  const prev = () => setIndex((i) => (i - 1 + media.length) % media.length);

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-2xl"
        aria-label="Close"
      >
        <FaTimes />
      </button>

      {media.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-4 text-white text-3xl"
          aria-label="Previous"
        >
          <FaChevronLeft />
        </button>
      )}

      <div
        className="relative w-full max-w-sm aspect-[9/16]"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "photo" ? (
          <Image src={item.src} alt={item.alt} fill className="object-contain" />
        ) : (
          <video src={item.src} controls autoPlay className="w-full h-full object-contain" />
        )}
      </div>

      {media.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-4 text-white text-3xl"
          aria-label="Next"
        >
          <FaChevronRight />
        </button>
      )}

      {media.length > 1 && (
        <div className="absolute bottom-6 flex gap-2">
          {media.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}