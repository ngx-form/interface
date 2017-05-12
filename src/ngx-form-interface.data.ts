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
 * `FormElementComponent` @Input() property
 * @export
 * @interface FormElementDataInterface
 * @extends {HtmlAttributesInterface}
 */
export interface FormElementDataInterface extends HtmlAttributesInterface {
  destroy?: DestroyInterface;
  element: element;
  key: string;
  model: any;
  options?: Array<any>;
  viewValue?: Array<any>;
}
