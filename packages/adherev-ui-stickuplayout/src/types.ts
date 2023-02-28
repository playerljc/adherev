import { ExtractPropTypes } from 'vue';

import { stickupLayoutProps } from './stickuplayout';

export type StickupLayoutProps = Partial<ExtractPropTypes<typeof stickupLayoutProps>>;
