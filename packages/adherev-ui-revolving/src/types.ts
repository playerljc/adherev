import { ExtractPropTypes } from 'vue';

import { revolvingProps } from './revolving';

export type RevolvingProps = Partial<ExtractPropTypes<typeof revolvingProps>>;
