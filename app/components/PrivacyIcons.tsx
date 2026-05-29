import { CircleHelp, Lock, Shield, ShieldCheck } from "lucide-react";
import type { PrivacyHighlight } from "../lib/privacy-data";
import { helixIconProps } from "./ui/helix-icon";

export function PrivacyHighlightIcon({ icon }: { icon: PrivacyHighlight["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "privacy":
      return <Shield {...props} />;
    case "transparent":
      return <Lock {...props} />;
    case "secure":
      return <ShieldCheck {...props} />;
    default:
      return null;
  }
}

export function PrivacyHelpIcon() {
  return (
    <span className="privacy-sidebar-help-icon privacy-sidebar-help-icon-wrap" aria-hidden="true">
      <CircleHelp size={26} strokeWidth={1.75} color="#1b56d4" />
    </span>
  );
}
