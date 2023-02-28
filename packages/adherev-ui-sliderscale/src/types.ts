import { ExtractPropTypes } from 'vue';

import { sliderScaleProps } from './sliderscale';

export type SliderScaleProps = Partial<ExtractPropTypes<typeof sliderScaleProps>>;
