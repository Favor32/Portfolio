import FocusGrid from "./FocusGrid";

export default function FocusSection() {
  return (
    <section className="w-full bg-surface py-24">
      <div className="max-w-[95rem] mx-auto px-8">
        <h3 className="font-serif font-bold text-2xl text-accent mb-8">My Focus</h3>
        <FocusGrid />
      </div>
    </section>
  );
}