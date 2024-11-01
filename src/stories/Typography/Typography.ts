import { html } from "lit";

export enum TypographyVariant {
  heading1 = "text-heading1",
  heading2 = "text-heading2",
  heading3 = "text-heading3",
  heading4 = "text-heading4",
  heading5 = "text-heading5",
  subtitle1 = "text-subtitle1",
  subtitle2 = "text-subtitle2",
  subtitle3 = "text-subtitle3",
  subtitle4 = "text-subtitle4",
  subtitle5 = "text-subtitle5",
  subtitle6 = "text-subtitle6",
  paragraph1 = "text-paragraph1",
  paragraph2 = "text-paragraph2",
  paragraph3 = "text-paragraph3",
  paragraph4 = "text-paragraph4",
  paragraph5 = "text-paragraph5",
  label1 = "text-label1",
  label2 = "text-label2",
  label3 = "text-label3",
  label4 = "text-label4",
  caption1 = "text-caption1",
  caption2 = "text-caption2",
}

export enum TypographyColor {
  primary = "text-primary",
  secondary = "text-secondary",
  hint = "text-hint",
  disabled = "text-disabled",
  inverse = "text-inverse",
  white = "text-white",
  link = "text-link",
  brand = "text-brand",
  info = "text-info",
  success = "text-success",
  warning = "text-warning",
  danger = "text-danger",
  grey = "text-grey",
}

export interface TypographyProps {
  label: string;
  variant: keyof typeof TypographyVariant;
  color?: keyof typeof TypographyColor;
}

export const Typography = ({ label, color, variant }: TypographyProps) => {
  return html`
    <div
      class=${[`${TypographyVariant[variant]}`, `${color ? TypographyColor[color] : ""}`].filter(Boolean).join(" ")}
    >
      ${label}
    </div>
  `;
};
