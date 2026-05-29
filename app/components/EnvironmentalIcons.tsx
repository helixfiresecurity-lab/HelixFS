import {
  Car,
  Check,
  Droplets,
  Leaf,
  Recycle,
  Shield,
  Sprout,
  Trash2,
  Users,
  Zap,
} from "lucide-react";
import type { EnvInitiative, EnvPillar, EnvStat } from "../lib/environmental-data";
import { helixIconProps } from "./ui/helix-icon";

export function EnvPillarIcon({ icon }: { icon: EnvPillar["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "sustainable":
      return <Leaf {...props} />;
    case "responsible":
      return <Recycle {...props} />;
    case "compliance":
      return <Shield {...props} />;
    case "future-focused":
      return <Users {...props} />;
    default:
      return null;
  }
}

export function EnvStatIcon({ icon }: { icon: EnvStat["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "energy":
      return <Zap {...props} />;
    case "recycle":
      return <Recycle {...props} />;
    case "fleet":
      return <Car {...props} />;
    case "improvement":
      return <Sprout {...props} />;
    default:
      return null;
  }
}

export function EnvInitiativeIcon({ icon }: { icon: EnvInitiative["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "energy-efficient":
      return <Zap {...props} />;
    case "responsible-sourcing":
      return <Users {...props} />;
    case "waste-reduction":
      return <Trash2 {...props} />;
    case "green-operations":
      return <Droplets {...props} />;
    case "team-engagement":
      return <Users {...props} />;
    default:
      return null;
  }
}

export function EnvShieldLeafIcon() {
  return <Leaf {...helixIconProps({ className: "env-commitment-shield-svg", strokeWidth: 2 })} />;
}

export function EnvCheckIcon() {
  return <Check {...helixIconProps({ className: "env-check-icon", strokeWidth: 2 })} />;
}

export function EnvLeafBadgeIcon() {
  return <Leaf {...helixIconProps({ strokeWidth: 1.75 })} />;
}
