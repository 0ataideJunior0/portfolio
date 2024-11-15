import {
  FrontEndCard,
  SmidCard,
  UiCard,
  UxCard,
} from "@/components/skillsUI/SkillCards";
import Marquee from "@/components/ui/marquee";

export const MarqueeSkillsSection = () => {
  return (
    <div className="lg:py-24 mt-4 sm:py-6">
      <div className="border border-y-slate-400">
        <Marquee pauseOnHover className="[--duration:20s]">
          <UxCard />
          <UiCard />
          <SmidCard />
          <FrontEndCard />
        </Marquee>
      </div>
      {/* reverse */}
      <div className="border border-slate-400 mt-4">
        <Marquee pauseOnHover reverse className="[--duration:20s]">
          <UxCard />
          <UiCard />
          <SmidCard />
          <FrontEndCard />
        </Marquee>
      </div>
    </div>
  );
};
