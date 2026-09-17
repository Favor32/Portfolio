import Image from "next/image";
import CapCutIcon from "./icons/CapCutIcon";
import MetaAdsManagerIcon from "./icons/MetaAdsManagerIcon";
import MetaBusinessSuiteIcon from "./icons/MetaBusinessSuiteIcon";
import AIVideoCreationIcon from "./icons/AIVideoCreationIcon";

const tools = [
  { name: "Canva", description: "Graphic design, carousels, presentations, branded content and social media creatives.", icon: null },
  { name: "CapCut", description: "Reels, short form video editing, subtitles, transitions and visual storytelling.", icon: CapCutIcon },
  { name: "Meta Business Suite", description: "Scheduling, publishing, content management and performance monitoring.", icon: MetaBusinessSuiteIcon },
  { name: "Meta Ads Manager", description: "Campaign setup, audience targeting, monitoring and performance analysis.", icon: MetaAdsManagerIcon },
  { name: "AI Video Creation Tools", description: "AI assisted visual concepts and video creation.", icon: AIVideoCreationIcon },
];

export default function ToolkitSection() {
  return (
   <section id="toolkit" className="w-full min-h-screen bg-surface py-16 md:py-24">
      <div className="max-w-[95rem] mx-auto px-8">
        <h2 className="font-serif font-bold text-3xl text-accent">Tools I Use</h2>

        <p className="text-muted mt-4 mb-10 max-w-md leading-relaxed">
          I use technology to improve my creative process and efficiency while
          keeping strategy, creativity and human judgement at the centre of my
          work.
        </p>

        <div className="grid grid-cols-1 gap-15 md:flex md:gap-5 md:overflow-x-auto md:snap-x md:snap-mandatory md:pb-4">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.name} className="md:shrink-0 md:snap-start w-full md:w-56 bg-card rounded-2xl p-4 md:p-5">
                {tool.name === "Canva" ? (
                  <Image src="/icons/canva.png" alt="Canva" width={28} height={28} className="mb-5" />
                ) : (
                  Icon && <Icon size={28} className=" mb-5" />
                )}
                
                <h3 className="font-medium">{tool.name}</h3>
                <p className="text-sm  mt-5 leading-relaxed">{tool.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}