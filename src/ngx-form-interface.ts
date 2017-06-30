import { element } from '@ngx-form/type';
import { HtmlAttributesInterface } from './ngx-form-interface.htmlattributes';

/**
 * Destroy property `__component` instance on
 * @export
 * @interface DestroyInterface
 */
export interface DestroyInterface {
  onCancelled: boolean;
  onChanged: boolean;
  onSubmitted: boolean;
}

/**
 * @export
 * @interface FormElementInterface
 */
export interface FormElementInterface {
  attributes: HtmlAttributesInterface;
  destroy?: DestroyInterface;
  element: element;
  focus?: boolean;
  key: string;
  model: any;
  options?: Array<any>;
  viewValue?: Array<any>;
}
