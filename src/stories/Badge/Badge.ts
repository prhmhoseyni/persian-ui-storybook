import { html } from "lit";

export enum BadgeColor {
  brand = "badge-brand",
  info = "badge-info",
  success = "badge-success",
  warning = "badge-warning",
  danger = "badge-danger",
  grey = "badge-grey",
}

export interface BadgeProps {
  label: string;
  color: keyof typeof BadgeColor;
  roundedFull?: boolean;
}

export const Badge = ({ label, color, roundedFull }: BadgeProps) => {
  return (
    html`
    <div
      class=${["badge", `${BadgeColor[color]}`, `${roundedFull ? "badge-rounded-full" : ""}`].filter(Boolean).join(" ")}
    >
      ${label}
    </div>`
  );
};
