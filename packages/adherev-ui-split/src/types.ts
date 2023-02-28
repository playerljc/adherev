import { ExtractPropTypes } from 'vue';

import { splitGroupProps, splitProps } from './split';

export type SplitProps = Partial<ExtractPropTypes<typeof splitProps>>;
export type SplitGroupProps = Partial<ExtractPropTypes<typeof splitGroupProps>>;
