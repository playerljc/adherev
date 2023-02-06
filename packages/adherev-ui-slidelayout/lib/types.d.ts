import { ExtractPropTypes } from 'vue';
import { overlayProps } from './overlay';
import { pushProps } from './push';
import { revealProps } from './reveal';
export declare type PushProps = Partial<ExtractPropTypes<typeof pushProps>>;
export declare type OverlayProps = Partial<ExtractPropTypes<typeof overlayProps>>;
export declare type RevealProps = Partial<ExtractPropTypes<typeof revealProps>>;
