import { html } from "lit";

export enum IconButtonVariant {
  primary = "",
  tinted = "icon-btn-tinted",
  outlined = "icon-btn-outlined",
  text = "icon-btn-text",
}

export enum IconButtonColor {
  brand = "icon-btn-brand",
  info = "icon-btn-info",
  success = "icon-btn-success",
  warning = "icon-btn-warning",
  danger = "icon-btn-danger",
  grey = "icon-btn-grey",
}

export interface IconButtonProps {
  color: keyof typeof IconButtonColor;
  variant: keyof typeof IconButtonVariant;
  roundedFull?: boolean;
}

export const Button = ({ color, variant, roundedFull }: IconButtonProps) => {
  return (
    html`
    <div
      class=${["icon-btn", `${IconButtonVariant[variant]}`, `${IconButtonColor[color]}`, `${roundedFull ? "icon-btn-rounded-full" : ""}`].filter(Boolean).join(" ")}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#B4B4B9">
        <path d="M263.79-192Q234-192 213-213.21t-21-51Q192-294 213.21-315t51-21Q294-336 315-314.79t21 51Q336-234 314.79-213t-51 21Zm216 0Q450-192 429-213.21t-21-51Q408-294 429.21-315t51-21Q510-336 531-314.79t21 51Q552-234 530.79-213t-51 21Zm216 0Q666-192 645-213.21t-21-51Q624-294 645.21-315t51-21Q726-336 747-314.79t21 51Q768-234 746.79-213t-51 21Zm-432-216Q234-408 213-429.21t-21-51Q192-510 213.21-531t51-21Q294-552 315-530.79t21 51Q336-450 314.79-429t-51 21Zm216 0Q450-408 429-429.21t-21-51Q408-510 429.21-531t51-21Q510-552 531-530.79t21 51Q552-450 530.79-429t-51 21Zm216 0Q666-408 645-429.21t-21-51Q624-510 645.21-531t51-21Q726-552 747-530.79t21 51Q768-450 746.79-429t-51 21Zm-432-216Q234-624 213-645.21t-21-51Q192-726 213.21-747t51-21Q294-768 315-746.79t21 51Q336-666 314.79-645t-51 21Zm216 0Q450-624 429-645.21t-21-51Q408-726 429.21-747t51-21Q510-768 531-746.79t21 51Q552-666 530.79-645t-51 21Zm216 0Q666-624 645-645.21t-21-51Q624-726 645.21-747t51-21Q726-768 747-746.79t21 51Q768-666 746.79-645t-51 21Z"/>
      </svg>
    </div>`
  );
};