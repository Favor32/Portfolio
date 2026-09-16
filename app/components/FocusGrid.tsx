"use client";

import { useEffect, useState } from "react";

const focus = [
  { title: "Strategy", desc: "Creating direction." },
  { title: "Content", desc: "Creating meaningful communication." },
  { title: "Management", desc: "Maintaining consistency." },
  { title: "Growth", desc: "Learning from data and improving." },
];

export default function FocusGrid() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-5">
      {focus.map((item, index) => (
        <div
          key={item.title}
          style={{ animationDelay: `${index * 400}ms` }}
          className={`bg-card rounded-2xl p-4 transition-opacity duration-1000 ${
            visible ? "opacity-100 animate-gentle-bounce" : "opacity-0"
          }`}
        >
          <h4 className="font-medium text-accent">{item.title}</h4>
          <p className="text-sm italic mt-1">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}