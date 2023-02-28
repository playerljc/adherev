import { ExtractPropTypes } from 'vue';

import { swiperOutProps } from './swipeout';

export type SwipeOutProps = Partial<ExtractPropTypes<typeof swiperOutProps>>;
