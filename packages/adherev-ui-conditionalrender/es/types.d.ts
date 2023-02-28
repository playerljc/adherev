import { ExtractPropTypes } from 'vue';
import { conditionalRenderProps } from './conditionalrender';
import { showProps } from './show';
import { visibilityProps } from './visibility';
export declare type ConditionalRenderProps = Partial<ExtractPropTypes<typeof conditionalRenderProps>>;
export declare type ShowProps = Partial<ExtractPropTypes<typeof showProps>>;
export declare type VisibilityProps = Partial<ExtractPropTypes<typeof visibilityProps>>;
