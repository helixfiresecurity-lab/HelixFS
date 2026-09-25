import {
  Award,
  Building2,
  Download,
  FileStack,
  FolderOpen,
  Handshake,
  Headphones,
  HeartPulse,
  House,
  KeyRound,
  Layers3,
  ShieldCheck,
  Store,
  Wrench,
} from "lucide-react";
import type { BrochureHeroFeature, BrochureItem } from "../lib/brochures-data";
import { helixIconProps } from "./ui/helix-icon";

export function BrochureHeroFeatureIcon({ icon }: { icon: BrochureHeroFeature["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "expert":
      return <Award {...props} />;
    case "download":
      return <Download {...props} />;
    case "trusted":
      return <ShieldCheck {...props} />;
    default:
      return null;
  }
}

export function BrochureTypeIcon({ icon }: { icon: BrochureItem["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "all":
      return <FileStack {...props} />;
    case "business":
      return <Building2 {...props} />;
    case "care":
      return <HeartPulse {...props} />;
    case "developers":
      return <Wrench {...props} />;
    case "food":
      return <Store {...props} />;
    case "home":
      return <House {...props} />;
    case "landlords":
      return <KeyRound {...props} />;
    case "agents":
      return <Layers3 {...props} />;
    case "trade":
      return <Handshake {...props} />;
    default:
      return null;
  }
}

export function BrochureDownloadIcon() {
  return <Download {...helixIconProps({ className: "brochure-download-icon", strokeWidth: 1.75 })} />;
}

export function BrochureSupportIcon() {
  return <Headphones {...helixIconProps({ className: "brochure-support-svg", size: 48, strokeWidth: 2 })} />;
}

export function BrochureFolderIcon() {
  return <FolderOpen {...helixIconProps({ className: "bro-folder-icon" })} />;
}
