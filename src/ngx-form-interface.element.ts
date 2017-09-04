// external
import { element } from '@ngx-form/type';

// internal
import { MdInterface } from './ngx-form-interface.md';
import { MdInputAttributesInterface } from './ngx-form-interface.mdinput';
import { ValidatorsInterface } from './ngx-form-interface.validators';
import { DestroyInterface } from './ngx-form-interface.destroy';

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
