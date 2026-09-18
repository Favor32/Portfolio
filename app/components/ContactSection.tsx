import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/the_wunmipaul", icon: FaInstagram },
  { name: "Facebook", url: "https://facebook.com/YOUR_FACEBOOK_HANDLE", icon: FaFacebook },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/olaoluwa-gbolahan-b71455270/", icon: FaLinkedin },
  { name: "Email", url: "mailto:YOUR_EMAIL@example.com", icon: FaEnvelope },
];

export default function ContactSection() {
  return (
    <section id="contact" className="w-full gradient-panel py-16 md:py-24">
      <div className="max-w-[95rem] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-white">
              Let's Build Something Great Together
            </h2>
            <p className="text-white/70 mt-6 leading-relaxed max-w-md">
              Whether you're looking to grow your brand's presence, need a
              content strategy that actually connects, or want a partner who
              treats your business like it's her own — I'd love to hear from
              you. Send a message and let's talk about what's possible.
            </p>

            <div className="mt-8 flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  
                    key={link.name}
                    href={link.url}
                    target={link.name === "Email" ? undefined : "_blank"}
                    rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                    className="text-white/70 hover:text-[#f6c453] hover:scale-110 transition-all duration-200"
                    aria-label={link.name}
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>

          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-5 bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/90 text-[#3c2415] rounded-xl px-4 py-3 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f6c453] transition-shadow"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/90 text-[#3c2415] rounded-xl px-4 py-3 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f6c453] transition-shadow"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-white/90 text-[#3c2415] rounded-xl px-4 py-3 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f6c453] transition-shadow resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#f6c453] text-[#3c2415] rounded-full px-7 py-3 font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}