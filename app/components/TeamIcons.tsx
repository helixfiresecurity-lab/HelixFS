import { Award, Check, Shield, Users, UsersRound } from "lucide-react";
import type { TeamValue } from "../lib/team-data";
import { helixIconProps } from "./ui/helix-icon";

export function TeamValueIcon({ icon }: { icon: TeamValue["icon"] }) {
  const props = helixIconProps();
  switch (icon) {
    case "shield":
      return <Shield {...props} />;
    case "customer":
      return <Users {...props} />;
    case "certified":
      return <Award {...props} />;
    case "teamwork":
      return <UsersRound {...props} />;
    default:
      return null;
  }
}

export function TeamCheckIcon() {
  return <Check {...helixIconProps({ className: "team-check-icon", strokeWidth: 2 })} />;
}

export function TeamMembersIcon() {
  return <UsersRound {...helixIconProps({ strokeWidth: 1.5 })} />;
}

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="team-linkedin-icon">
      <rect x="2.5" y="2.5" width="15" height="15" rx="2" fill="currentColor" />
      <path d="M6.5 8.5v6M6.5 6.2v.01" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M10 14.5v-3.2c0-1.2.8-2 2-2s2 .7 2 2.2V14.5"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
