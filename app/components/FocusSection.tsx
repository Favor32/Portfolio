import FocusGrid from "./FocusGrid";

export default function FocusSection() {
  return (
    <section className="w-full gradient-panel py-16 md:py-24">
      <div className="max-w-[95rem] mx-auto px-6 md:px-8">
        <h3 className="font-serif font-bold text-xl md:text-2xl text-white mb-8">My Focus</h3>
        <FocusGrid />
      </div>
    </section>
  );
}