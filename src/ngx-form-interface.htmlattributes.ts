import { autocomplete, autofocus, disabled, input, readonly, required } from '@ngx-form/type';
/**
 * Some html attributes
 * http://w3c.github.io/html-reference/elements.html
 * @export
 * @interface HtmlAttributesInterface
 */
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
