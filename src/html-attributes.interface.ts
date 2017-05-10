import { autocomplete, autofocus, disabled, input, readonly, required } from '@ngx-form/type';
export interface HtmlAttributesInterface {
  autocomplete?: autocomplete;
  autofocus?: autofocus;
  disabled?: disabled;
  max?: number;
  min?: number;
  maxlength?: number;
  minlength?: number;
  pattern?: string;
  placeholder?: string;
  readonly?: readonly;
  required?: required;
  type?: input;
}
