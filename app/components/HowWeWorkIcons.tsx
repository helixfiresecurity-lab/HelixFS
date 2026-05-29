import {
  Award,
  BarChart3,
  ClipboardCheck,
  Headphones,
  MessageSquare,
  PencilRuler,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import type { ProcessBenefit, ProcessPillar, ProcessStep } from "../lib/how-we-work-data";
import { helixIconProps } from "./ui/helix-icon";

export function ProcessPillarIcon({ icon }: { icon: ProcessPillar["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "client-focused":
      return <MessageSquare {...props} />;
    case "quality-assured":
      return <ClipboardCheck {...props} />;
    case "compliant-design":
      return <ShieldCheck {...props} />;
    case "ongoing-support":
      return <Headphones {...props} />;
    default:
      return null;
  }
}

export function ProcessStepIcon({ icon }: { icon: ProcessStep["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "consultation":
      return <MessageSquare {...props} />;
    case "assessment":
      return <Search {...props} />;
    case "solution-design":
      return <PencilRuler {...props} />;
    case "installation":
      return <Wrench {...props} />;
    case "commissioning":
      return <ClipboardCheck {...props} />;
    case "ongoing-support":
      return <Headphones {...props} />;
    default:
      return null;
  }
}

export function ProcessBenefitIcon({ icon }: { icon: ProcessBenefit["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "proven-experience":
      return <Award {...props} />;
    case "expert-team":
      return <Users {...props} />;
    case "reliable-results":
      return <BarChart3 {...props} />;
    case "long-term-partnership":
      return <TrendingUp {...props} />;
    default:
      return null;
  }
}
