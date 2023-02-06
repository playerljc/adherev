import { ExtractPropTypes } from 'vue';

import { suspenseAsyncProps } from './async';
import { suspenseProps } from './suspense';
import { suspenseSyncProps } from './sync';

export type SuspenseProps = Partial<ExtractPropTypes<typeof suspenseProps>>;

export type SuspenseSyncProps = Partial<ExtractPropTypes<typeof suspenseSyncProps>>;

export type SuspenseAsyncProps = Partial<ExtractPropTypes<typeof suspenseAsyncProps>>;
