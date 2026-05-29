import { Award, Handshake, Scale, Shield, Users } from "lucide-react";
import type { AboutPillar, AboutValue } from "../lib/about-data";
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
