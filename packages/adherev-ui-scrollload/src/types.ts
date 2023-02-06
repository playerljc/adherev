import { ExtractPropTypes } from 'vue';

import { scrollLoadProps } from './scrollload';

export type ScrollLoadProps = Partial<ExtractPropTypes<typeof scrollLoadProps>>;
