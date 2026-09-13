import { FaHashtag, FaMapSigns, FaVideo, FaCalendarAlt, FaChartLine, FaRobot } from "react-icons/fa";

const services = [
  { title: "Content Strategy", description: "Developing a clear content direction based on the brand, audience and business objectives.", icon: FaMapSigns },
  { title: "Content Creation", description: "Creating Reels, graphics, carousels, captions and other social media content.", icon: FaVideo },
  { title: "Content Planning", description: "Developing content pillars, topics and calendars that keep the brand organised and consistent.", icon: FaCalendarAlt },
  { title: "Analytics & Reporting", description: "Tracking performance and turning social media data into useful insights.", icon: FaChartLine },
  { title: "AI & Creative Content", description: "Using AI powered creative tools to support ideation, visual development and video creation.", icon: FaRobot },
];

export default function ServicesSection() {
  return (
    <section id="services" className="max-w-[95rem] mx-auto px-8 py-24">
      <h2 className="font-serif font-bold text-3xl text-accent">What I Do</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="bg-white/50 rounded-2xl p-5">
              <Icon size={28} className="text-accent mb-3" />
              <h3 className="font-medium">{service.title}</h3>
              <p className="text-muted text-sm mt-2 italic leading-relaxed">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}