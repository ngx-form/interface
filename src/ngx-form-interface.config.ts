import { element } from '@ngx-form/type';
import { component } from '@ngx-core/common';

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
 * Interface for FormElementModule forRoot parameter config
 * @export
 * @interface FormElementConfigInterface
 */
export interface FormElementConfigInterface {
  elements: Array<ConfigElementInterface>;
}
