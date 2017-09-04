import { element } from '@ngx-form/type';
import { component } from '@ngx-core/common';
import { ErrorMessagesInterface } from './ngx-form-interface.error-messages';

export interface FormElementConfigInterface {
  elements: {
    [index: number]: {
      name: element;
      component: component;
    }
  };
  errorMessages?: ErrorMessagesInterface;
}
