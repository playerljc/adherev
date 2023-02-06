import { ExtractPropTypes } from 'vue';

import { importantConfirmProps } from './importantconfirm';

export type ImportantConfirmProps = Partial<ExtractPropTypes<typeof importantConfirmProps>>;
