import { ExtractPropTypes } from 'vue';

import { pullRefreshProps } from './pullrefresh';

export type PullRefreshProps = Partial<ExtractPropTypes<typeof pullRefreshProps>>;
