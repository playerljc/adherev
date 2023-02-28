import { ExtractPropTypes } from 'vue';

import { spinProps } from './spin';

export type SpinProps = Partial<ExtractPropTypes<typeof spinProps>>;
