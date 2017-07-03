import { element } from '@ngx-form/type';
import { HtmlAttributesInterface } from './ngx-form-interface.htmlattributes';
import { MdInputAttributesInterface } from './ngx-form-interface.mdinput';

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
  attributes: MdInputAttributesInterface;
  destroy?: DestroyInterface;
  element: element;
  focus?: boolean;
  key: string;
  options?: Array<any>;
  viewValue?: Array<any>;
}

export interface ArrayFormElementInterface {
  [index: number]: FormElementInterface;
}
