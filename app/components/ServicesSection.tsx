"use client";

import { useEffect, useState } from "react";
import { FaChessKnight, FaPaintBrush, FaCalendarAlt, FaChartLine, FaRobot, FaBullhorn } from "react-icons/fa";

const services = [
  { title: "Content Strategy", description: "Developing a clear content direction based on the brand, audience and business objectives.", icon: FaChessKnight },
  { title: "Content Creation", description: "Creating Reels, graphics, carousels, captions and other social media content.", icon: FaPaintBrush },
  { title: "Content Planning", description: "Developing content pillars, topics and calendars that keep the brand organised and consistent.", icon: FaCalendarAlt },
  { title: "Analytics & Reporting", description: "Tracking performance and turning social media data into useful insights.", icon: FaChartLine },
  { title: "Ad Campaign Management", description: "Planning, setting up and managing paid ad campaigns to boost reach, drive engagement and grow the right audience.", icon: FaBullhorn },
  { title: "AI & Creative Content", description: "Using AI powered creative tools to support ideation, visual development and video creation.", icon: FaRobot },
];

export default function ServicesSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="services" className="max-w-[95rem] mx-auto px-6 md:px-8 py-16 md:py-24">
      <h2 className="font-serif font-bold text-2xl md:text-3xl text-accent">What I Do</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              style={{ transitionDelay: `${index * 200}ms` }}
              className={`bg-card rounded-2xl p-5 transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Icon size={28} className="text-accent mb-3" />
              <h3 className="font-medium">{service.title}</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}