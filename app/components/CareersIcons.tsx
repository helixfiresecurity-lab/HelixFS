import {
  Activity,
  Award,
  CalendarClock,
  Check,
  CircleHelp,
  GraduationCap,
  Headphones,
  ShieldCheck,
  TrendingUp,
  User,
  Users,
  Wrench,
} from "lucide-react";
import type {
  CareerBenefit,
  CareerPillar,
  CareerStat,
  OpenPosition,
} from "../lib/careers-data";
import { helixIconProps } from "./ui/helix-icon";

export function CareerPillarIcon({ icon }: { icon: CareerPillar["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "make-impact":
      return <ShieldCheck {...props} />;
    case "grow-with-us":
      return <TrendingUp {...props} />;
    case "one-team":
      return <Users {...props} />;
    default:
      return null;
  }
}

export function CareerStatIcon({ icon }: { icon: CareerStat["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "team":
      return <Users {...props} />;
    case "excellence":
      return <Award {...props} />;
    case "training":
      return <GraduationCap {...props} />;
    case "people-first":
      return <ShieldCheck {...props} />;
    default:
      return null;
  }
}

export function OpenPositionIcon({ icon }: { icon: OpenPosition["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "fire-alarm":
      return <Wrench {...props} />;
    case "security":
      return <ShieldCheck {...props} />;
    case "maintenance":
      return <Headphones {...props} />;
    default:
      return null;
  }
}

export function CareerBenefitIcon({ icon }: { icon: CareerBenefit["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "varied":
      return <Activity {...props} />;
    case "resourced":
      return <Check {...props} />;
    case "progression":
      return <TrendingUp {...props} />;
    case "matter":
      return <User {...props} />;
    case "training":
      return <GraduationCap {...props} />;
    case "scheduling":
      return <CalendarClock {...props} />;
    default:
      return null;
  }
}

export function CareersCheckIcon() {
  return <Check {...helixIconProps({ className: "careers-check-icon", strokeWidth: 2 })} />;
}

export function CareersQuestionIcon() {
  return <CircleHelp {...helixIconProps({ className: "careers-question-svg", size: 48, strokeWidth: 2 })} />;
}
