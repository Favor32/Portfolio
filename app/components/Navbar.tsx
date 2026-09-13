import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Toolkit", href: "#toolkit" },
  { name: "Work", href: "#work" },
  
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="border-b-2 border-border w-full px-8 py-4 flex items-center justify-between sticky top-0 bg-background/90 backdrop-blur z-10">
      <Link href="/" className="font-serif font-semibold text-lg text-foreground">
        Social Media Management
      </Link>

      <div className="flex gap-6 text-sm">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-medium text-foreground hover:text-accent transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}