import { ExtractPropTypes } from 'vue';

import { surnamesProps } from './surnames';

export type SurnamesProps = Partial<ExtractPropTypes<typeof surnamesProps>>;
