export interface IElement {
  [key: string]: IButton | IInput | IDate;
}

interface IInput {
  component: string;
  hint?: string;
  id: number;
  placeholder?: string;
  type?: string;
  validation?: IValidation;
  value?: string;
  errorMessage?: string;
  showEye?: boolean;
  darkMode?: boolean;
}

export interface IValidation {
  max?: number;
  min?: number;
  required: boolean;
  email?: string;
  darkMode?: boolean;
}

interface IButton {
  component: string;
  disabled?: boolean;
  id: number;
  label?: string;
  class?: any;
  isSubmit?: boolean;
}

interface IDate {
  component: string;
  id: number;
  value: string;
  validation?: IValidation;
}
