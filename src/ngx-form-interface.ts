import { element } from '@ngx-form/type';
import { HtmlAttributesInterface } from './ngx-form-interface.htmlattributes';
import { MdInputAttributesInterface } from './ngx-form-interface.mdinput';
import { ErrorMessagesInterface } from './ngx-form-interface.error-messages';
import { ValidatorsInterface } from './ngx-form-interface.validators';

export interface MdHintInterface {
  start?: 'maxlength' | string;
  end?: 'maxlength' | string;
};

export interface MdInterface {
  mdHint?: MdHintInterface;
  mdPlaceholder?: string;
  mdPrefix?: string;
  mdSuffix?: string;
}

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
export interface FormElementInterface extends MdInterface {
  attributes: MdInputAttributesInterface;
  destroy?: DestroyInterface;
  element: element;
  focus?: boolean;
  key: string;
  label?: string;
  options?: Array<any>;
  validators?: ValidatorsInterface;
  viewValue?: Array<any>;
}

export interface ArrayFormElementInterface {
  [index: number]: FormElementInterface;
}
