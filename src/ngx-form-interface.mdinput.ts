
import { mdHint } from '@ngx-form/type';
import { HtmlAttributesInterface } from './ngx-form-interface.htmlattributes';

// MdInputContainer
export interface MdInputContainerInterface {
  color?: string;
  floatPlaceholder?: string;
  hintLabel?: string;
  hideRequiredMarker?: boolean;
}

export interface MdInputAttributesInterface extends MdInputContainerInterface, HtmlAttributesInterface {
  mdAutosizeMaxRows?: number;
  mdAutosizeMinRows?: number;
  mdHint?: mdHint;
  mdPlaceholder?: string;
  mdPrefix?: string;
  mdSuffix?: string;
}

