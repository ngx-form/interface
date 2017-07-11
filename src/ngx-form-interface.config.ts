import { element } from '@ngx-form/type';
import { component } from '@ngx-core/common';
import { ErrorMessagesInterface } from './ngx-form-interface.error-messages';

/**
 * Property `FormElementConfigInterface` elements
 * @export
 * @interface ConfigElementInterface
 */
export interface ConfigElementInterface {
  name: element;
  component: component;
}

/**
 * @export
 * @interface ConfigElementsInterface
 */
export interface ConfigElementsInterface {
  [index: number]: ConfigElementInterface;
}

/**
 *
 * Interface for FormElementModule forRoot parameter config
 * @export
 * @interface FormElementConfigInterface
 */
export interface FormElementConfigInterface {
  elements: ConfigElementsInterface;
  errorMessages?: ErrorMessagesInterface;
}
