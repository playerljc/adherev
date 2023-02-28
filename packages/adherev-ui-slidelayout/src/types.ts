import { ExtractPropTypes } from 'vue';

import { overlayProps } from './overlay';
import { pushProps } from './push';
import { revealProps } from './reveal';

export type PushProps = Partial<ExtractPropTypes<typeof pushProps>>;
export type OverlayProps = Partial<ExtractPropTypes<typeof overlayProps>>;
export type RevealProps = Partial<ExtractPropTypes<typeof revealProps>>;
