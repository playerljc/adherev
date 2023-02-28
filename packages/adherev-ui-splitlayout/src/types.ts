import { ExtractPropTypes } from 'vue';

import { splitLayoutProps } from './splitlayout';

export type SplitLayoutProps = Partial<ExtractPropTypes<typeof splitLayoutProps>>;
