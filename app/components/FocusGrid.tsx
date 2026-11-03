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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full">
      {focus.map((item, index) => (
        <div
          key={item.title}
          style={{ transitionDelay: `${index * 120}ms` }}
          className={`bg-card rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_0_25px_-4px_var(--accent)] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h4 className="font-medium text-foreground">{item.title}</h4>
          <p className="text-sm text-muted mt-1">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}