import { ExtractPropTypes } from 'vue';

import { conditionalRenderProps } from './conditionalrender';
import { showProps } from './show';
import { visibilityProps } from './visibility';

export type ConditionalRenderProps = Partial<ExtractPropTypes<typeof conditionalRenderProps>>;
export type ShowProps = Partial<ExtractPropTypes<typeof showProps>>;
export type VisibilityProps = Partial<ExtractPropTypes<typeof visibilityProps>>;
