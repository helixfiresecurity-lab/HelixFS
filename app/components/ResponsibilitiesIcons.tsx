import {
  AlertTriangle,
  BookOpen,
  Check,
  ClipboardCheck,
  Headphones,
  Scale,
  Search,
  Shield,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import type {
  HelixSupportCard,
  LegalDuty,
  ResponsibilityPillar,
} from "../lib/responsibilities-data";
import { helixIconProps } from "./ui/helix-icon";

export function ResponsibilityPillarIcon({ icon }: { icon: ResponsibilityPillar["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "review":
      return <Search {...props} />;
    case "maintain":
      return <Wrench {...props} />;
    case "record":
      return <ClipboardCheck {...props} />;
    default:
      return null;
  }
}

export function LegalDutyIcon({ icon }: { icon: LegalDuty["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "risk-assessment":
      return <Shield {...props} />;
    case "protect-occupants":
      return <Users {...props} />;
    case "safety-measures":
      return <ShieldCheck {...props} />;
    case "maintain":
      return <Wrench {...props} />;
    case "training":
      return <BookOpen {...props} />;
    case "emergency-plan":
      return <AlertTriangle {...props} />;
    case "records":
      return <ClipboardCheck {...props} />;
    default:
      return null;
  }
}

export function HelixSupportIcon({ icon }: { icon: HelixSupportCard["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "surveys":
      return <Search {...props} />;
    case "maintenance":
      return <Wrench {...props} />;
    case "documentation":
      return <ClipboardCheck {...props} />;
    default:
      return null;
  }
}

export function ResponsibilitiesCheckIcon() {
  return <Check {...helixIconProps({ className: "resp-check-icon", strokeWidth: 2 })} />;
}

export function ResponsibilitiesScaleIcon() {
  return <Scale {...helixIconProps()} />;
}

export function ResponsibilitiesAlertIcon() {
  return <AlertTriangle {...helixIconProps()} />;
}
