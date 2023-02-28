import { ExtractPropTypes } from 'vue';
import { suspenseAsyncProps } from './async';
import { suspenseProps } from './suspense';
import { suspenseSyncProps } from './sync';
export declare type SuspenseProps = Partial<ExtractPropTypes<typeof suspenseProps>>;
export declare type SuspenseSyncProps = Partial<ExtractPropTypes<typeof suspenseSyncProps>>;
export declare type SuspenseAsyncProps = Partial<ExtractPropTypes<typeof suspenseAsyncProps>>;
