import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import FocusGrid from "./FocusGrid";

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/the_wunmipaul", icon: FaInstagram },
  { name: "Facebook", url: "https://facebook.com/YOUR_FACEBOOK_HANDLE", icon: FaFacebook },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/olaoluwa-gbolahan-b71455270/", icon: FaLinkedin },
];

const focus = [
  { title: "Strategy", desc: "Creating direction." },
  { title: "Content", desc: "Creating meaningful communication." },
  { title: "Management", desc: "Maintaining consistency." },
  { title: "Growth", desc: "Learning from data and improving." },
];

export default function AboutSection() {
  return (
    <section id="about" className="max-w-[95rem] mx-auto px-6 md:px-8 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-stretch">
        <div>
          <h1 className="font-serif font-bold text-3xl md:text-4xl">Paul Omowunmi Bisola</h1>
          <p className="text-accent font-medium mt-4 italic">Social Media Manager</p>

          <p className="mt-6  font-bold italic leading-relaxed max-w-md">
            Building intentional digital presence for businesses that want to
            be seen, understood and remembered.
          </p>

          <div className="mt-6 flex gap-4">
  {socialLinks.map((link) => {
    const Icon = link.icon;
    return (
      <a
        key={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-accent hover:scale-110 transition-all duration-200"
        aria-label={link.name}
      >
        <Icon size={22} />
      </a>
    );
  })}
</div>

          
        <h2 className="font-serif font-bold text-xl md:text-2xl text-accent mt-10 mb-6">About Me</h2>

          <p className="text-foreground leading-relaxed">
  I'm Paul Omowunmi Bisola, a Social Media Manager focused on
  helping businesses build a strong and purposeful presence online.
</p>

<p className="font-serif italic text-2xl text-accent mt-8 leading-snug">
  "I combine strategy, creativity and data to help brands communicate
  their value, connect with their target audience and maintain a
  consistent digital presence."
</p>

<p className="mt-8 text-foreground leading-relaxed">
  From developing content strategies and planning content to
  creating, managing and analysing social media performance, I
  approach every project with intention.
</p>
        </div>

        <div className="relative w-200 h-full min-h-[420px] overflow-hidden">
  <Image
    src="/profile.png"
    alt="Paul Omowunmi Bisola"
    fill
    className="object-contain transition-transform duration-500 hover:scale-105"
    priority
  />
</div>
      </div>

      

    
    </section>
  );
}