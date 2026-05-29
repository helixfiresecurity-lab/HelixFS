import {
  Award,
  Clock,
  FolderKanban,
  Handshake,
  Headphones,
  Scale,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { AboutPillar, AboutStat, AboutValue } from "../lib/about-data";
import { helixIconProps } from "./ui/helix-icon";

export function AboutPillarIcon({ icon }: { icon: AboutPillar["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "shield":
      return <Shield {...props} />;
    case "customer":
      return <Users {...props} />;
    case "certified":
      return <Award {...props} />;
    default:
      return null;
  }
}

export function AboutStatIcon({ icon }: { icon: AboutStat["icon"] }) {
  const props = helixIconProps({ strokeWidth: 1.5 });
  switch (icon) {
    case "years":
      return <Clock {...props} />;
    case "projects":
      return <FolderKanban {...props} />;
    case "compliant":
      return <ShieldCheck {...props} />;
    case "support":
      return <Headphones {...props} />;
    default:
      return null;
  }
}

export function AboutValueIcon({ icon }: { icon: AboutValue["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "integrity":
      return <Shield {...props} />;
    case "accountability":
      return <Users {...props} />;
    case "excellence":
      return <Award {...props} />;
    case "collaboration":
      return <Handshake {...props} />;
    case "responsibility":
      return <Scale {...props} />;
    default:
      return null;
  }
}
