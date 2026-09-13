import ViewsChart from "./ViewsChart";
import WorkGallery from "./WorkGallery";

export default function WorkSection() {
  return (
    <section id="work" className="max-w-[95rem] mx-auto px-8 py-24">
      <h2 className="font-serif font-bold text-3xl text-accent">My Work</h2>

      <div className="bg-white/50 rounded-2xl p-7 mt-10">
        <h3 className="font-serif font-bold text-xl">FACO</h3>
        <p className="text-sm text-muted mb-4">
          Digital Skills & Education — Role: Social Media Manager
        </p>

        <h4 className="font-medium mt-6">The Objective</h4>
        <p className="text-muted text-sm mt-1 leading-relaxed">
          To strengthen the brand's online presence and communicate its
          educational opportunities and digital skills offerings more
          effectively.
        </p>

        <h4 className="font-medium mt-6">Content Focus</h4>
        <p className="text-muted text-sm mt-1">
          Education • Storytelling • Inspiration • Opportunities • Digital Skills
        </p>

        <h4 className="font-medium mt-6 mb-2">Content Views (Jul–Oct)</h4>
        <ViewsChart />
        <p className="text-sm text-muted mt-2">
          <span className="font-medium text-accent">+624%</span> increase in
          content views, July → October.
        </p>
      </div>

      <WorkGallery />
    </section>
  );
}