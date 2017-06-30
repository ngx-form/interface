
import { HtmlAttributesInterface } from './ngx-form-interface.htmlattributes';

// MdInputContainer
export interface MdInputContainerInterface {
  color?: string;
  floatPlaceholder?: string;
  hintLabel?: string;
  hideRequiredMarker?: boolean;
}

export interface MdInputAttributesInterface extends MdInputContainerInterface, HtmlAttributesInterface {
  test: string;
  mdAutosizeMaxRows?: number;
  mdAutosizeMinRows?: number;
  mdHint?: string;
  mdPlaceholder?: string;
  mdPrefix?: string;
  mdSuffix?: string;
}

