import { ExtractPropTypes } from 'vue';

import { fontSizeSettingProps } from './fontsizesetting';

export type FontSizeSettingProps = Partial<ExtractPropTypes<typeof fontSizeSettingProps>>;
