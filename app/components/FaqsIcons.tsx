import {
  CircleHelp,
  ClipboardCheck,
  Flame,
  Minus,
  Plus,
  ShieldCheck,
  Video,
  Wrench,
  Wifi,
} from "lucide-react";
import type { FaqCategoryId } from "../lib/faqs-data";
import { helixIconProps } from "./ui/helix-icon";

export function FaqsHelpBubbleIcon({ className }: { className?: string }) {
  return (
    <span className={`faqs-help-bubble${className ? ` ${className}` : ""}`} aria-hidden="true">
      <CircleHelp size={28} strokeWidth={1.75} color="#1b56d4" />
    </span>
  );
}

export function FaqsShieldCheckIcon({ className }: { className?: string }) {
  return <ShieldCheck {...helixIconProps({ className, color: "#1b56d4", strokeWidth: 1.6 })} />;
}

export function FaqsCategoryIcon({
  id,
  active,
  className,
}: {
  id: FaqCategoryId;
  active: boolean;
  className?: string;
}) {
  const color = active ? "#ff1015" : "#64748b";
  const props = helixIconProps({ className, color, strokeWidth: 1.75 });

  switch (id) {
    case "fire-systems":
      return <Flame {...props} />;
    case "security-systems":
      return <Video {...props} />;
    case "compliance":
      return <ClipboardCheck {...props} />;
    case "maintenance":
      return <Wrench {...props} />;
    case "smart-systems":
      return <Wifi {...props} />;
    default:
      return null;
  }
}

export function FaqsAccordionToggle({ open }: { open: boolean }) {
  if (open) {
    return (
      <span className="faqs-toggle faqs-toggle--open" aria-hidden="true">
        <span className="faqs-toggle-circle faqs-toggle-circle--open">
          <Minus size={14} strokeWidth={2.25} color="#fff" />
        </span>
      </span>
    );
  }

  return (
    <span className="faqs-toggle faqs-toggle--closed" aria-hidden="true">
      <Plus size={22} strokeWidth={2} color="#ff1015" />
    </span>
  );
}
