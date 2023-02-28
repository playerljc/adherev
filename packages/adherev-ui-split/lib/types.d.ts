import { ExtractPropTypes } from 'vue';
import { splitGroupProps, splitProps } from './split';
export declare type SplitProps = Partial<ExtractPropTypes<typeof splitProps>>;
export declare type SplitGroupProps = Partial<ExtractPropTypes<typeof splitGroupProps>>;
