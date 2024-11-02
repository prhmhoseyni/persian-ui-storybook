import { html } from "lit";

export enum FormControlVariant {
  primary = "",
  secondary = "form-control-secondary",
}

export interface FormControlProps {
  value: string;
  variant: keyof typeof FormControlVariant;
  hasError?: boolean;
}

export const FormControl = ({ value, variant, hasError }: FormControlProps) => {
  return (
    html`
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
      <input 
        type="text" 
        value="${value}"
        placeholder="متن نمونه"
        class=${["form-control", `${FormControlVariant[variant]}`, `${hasError ? "form-control--has-error" : ""}`].filter(Boolean).join(" ")} 
      />
      <input 
        type="text" 
        value="${value}"
        placeholder="غیر فعـال"
        class=${["form-control", `${FormControlVariant[variant]}`].filter(Boolean).join(" ")} 
        disabled
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
      <textarea 
        name="description" 
        id="description" 
        placeholder="متن نمونه" 
        class=${["form-control", `${FormControlVariant[variant]}`, `${hasError ? "form-control--has-error" : ""}`].filter(Boolean).join(" ")} 
      ></textarea>
      <textarea 
        name="description" 
        id="description" 
        placeholder="غیر فعـال"
        class=${["form-control", `${FormControlVariant[variant]}`].filter(Boolean).join(" ")} 
        disabled
      ></textarea>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
      <select 
        name="select"
        class=${["form-control", `${FormControlVariant[variant]}`, `${hasError ? "form-control--has-error" : ""}`].filter(Boolean).join(" ")} 
      >
        <option value="value-1">واحد فناوری‌های مسکن داتین</option>
      </select>
      <select 
        name="select"
        class=${["form-control", `${FormControlVariant[variant]}`].filter(Boolean).join(" ")} 
        disabled
      >
        <option value="value-1">واحد فناوری‌های مسکن داتین</option>
      </select>
    </div>

    <div class="flex justify-start gap-4 p-2">
      <input type="checkbox" name="checkbox" id="1" class="form-control" />
      <input type="checkbox" name="checkbox" id="2" class="form-control" />
      <input type="checkbox" name="checkbox" id="3" class="form-control" data-indeterminate="true" />
      <input type="checkbox" name="checkbox" id="3" class="form-control" checked disabled />
    </div>

    <div class="flex justify-start gap-4 p-2">
      <input type="radio" name="radio" id="1" class="form-control" />
      <input type="radio" name="radio" id="2" class="form-control" />
      <input type="radio" name="radio" id="3" class="form-control" />
    </div>`
  );
};
