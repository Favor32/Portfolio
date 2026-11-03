import Image from "next/image";
import CapCutIcon from "./icons/CapCutIcon";
import MetaAdsManagerIcon from "./icons/MetaAdsManagerIcon";
import MetaBusinessSuiteIcon from "./icons/MetaBusinessSuiteIcon";
import AIVideoCreationIcon from "./icons/AIVideoCreationIcon";
import { FaRobot } from "react-icons/fa";

const tools = [
  { name: "Canva", description: "Graphic design, carousels, presentations, branded content and social media creatives.", icon: null },
  { name: "CapCut", description: "Reels, short form video editing, subtitles, transitions and visual storytelling.", icon: CapCutIcon },
  { name: "Meta AI", description: "Creative ideation, content assistance and concept development.", icon: FaRobot },
  { name: "Meta Business Suite", description: "Scheduling, publishing, content management and performance monitoring.", icon: MetaBusinessSuiteIcon },
  { name: "Meta Ads Manager", description: "Campaign setup, audience targeting, monitoring and performance analysis.", icon: MetaAdsManagerIcon },
  { name: "AI Video Creation Tools", description: "AI assisted visual concepts and video creation.", icon: AIVideoCreationIcon },
];

function ToolCard({ tool }: { tool: (typeof tools)[number] }) {
  const Icon = tool.icon;
  return (
    <div className="shrink-0 w-64 bg-black rounded-2xl p-5">
      {tool.name === "Canva" ? (
        <Image src="/icons/canva.png" alt="Canva" width={28} height={28} className="mb-3" />
      ) : (
        Icon && <Icon size={28} className="text-accent mb-3" />
      )}
      <h3 className="font-medium text-foreground">{tool.name}</h3>
      <p className="text-sm text-muted mt-1 leading-relaxed">{tool.description}</p>
    </div>
  );
}

export default function ToolkitSection() {
  return (
    <section id="toolkit" className="w-full bg-surface py-16 md:py-24">
      <div className="max-w-[95rem] mx-auto px-6 md:px-8">
        <h2 className="font-serif font-bold text-2xl md:text-3xl text-accent">Tools I Use</h2>
        <p className="text-muted mt-4 mb-10 max-w-md leading-relaxed">
          I use technology to improve my creative process and efficiency while
          keeping strategy, creativity and human judgement at the centre of my
          work.
        </p>

        <div className="grid grid-cols-1 gap-5 md:hidden">
          {tools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </div>

      <div className="hidden md:block overflow-hidden mt-10">
        <div className="flex gap-5 w-max animate-marquee">
          {[...tools, ...tools].map((tool, i) => (
            <ToolCard key={`${tool.name}-${i}`} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}