import {
  Award,
  Building2,
  ClipboardCheck,
  DraftingCompass,
  MapPin,
  Shield,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import type { CaseStudyPillar, CaseStudyProject } from "../lib/case-studies-data";
import { helixIconProps } from "./ui/helix-icon";

export function CaseStudyPillarIcon({ icon }: { icon: CaseStudyPillar["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "tailored":
      return <ShieldCheck {...props} />;
    case "expertise":
      return <Award {...props} />;
    case "results":
      return <ClipboardCheck {...props} />;
    case "trusted":
      return <Users {...props} />;
    default:
      return null;
  }
}

export function CaseStudyMetaIcon({ type }: { type: "solution" | "sector" | "location" }) {
  const props = helixIconProps();
  switch (type) {
    case "solution":
      return <Wrench {...props} />;
    case "sector":
      return <Building2 {...props} />;
    case "location":
      return <MapPin {...props} />;
    default:
      return null;
  }
}

export function CaseStudyProjectIcon({ category }: { category: CaseStudyProject["category"] }) {
  const props = helixIconProps();
  switch (category) {
    case "fire":
      return <Building2 {...props} />;
    case "security":
      return <Shield {...props} />;
    case "emergency":
      return <ShieldCheck {...props} />;
    default:
      return null;
  }
}

export function CaseStudyBlueprintIcon() {
  return <DraftingCompass {...helixIconProps({ className: "cs-blueprint-svg", size: 48, strokeWidth: 2 })} />;
}
