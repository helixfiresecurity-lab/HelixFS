import {
  Award,
  ClipboardCheck,
  Download,
  FileText,
  Flame,
  FolderOpen,
  Headphones,
  Monitor,
  Shield,
  ShieldCheck,
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
    case "fire":
      return <Flame {...props} />;
    case "security":
      return <Shield {...props} />;
    case "emergency":
      return <FileText {...props} />;
    case "smart":
      return <Monitor {...props} />;
    case "compliance":
      return <ClipboardCheck {...props} />;
    case "integrated":
      return <FileText {...props} />;
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
