import { ExtractPropTypes } from 'vue';

import { autoProps } from './auto';
import { backLayoutProps } from './backLayout';
import { fixedProps } from './fixed';
import { flexLayoutProps } from './flexlayout';
import { horizontalFlexLayoutProps } from './horizontalFlexLayout';
import { scrollLayoutProps } from './scrollLayout';
import { toolBarLayoutProps } from './toolBarLayout';
import { verticalFlexLayoutProps } from './verticalFlexLayout';

export type AutoProps = Partial<ExtractPropTypes<typeof autoProps>>;
export type BackLayoutProps = Partial<ExtractPropTypes<typeof backLayoutProps>>;
export type FixedProps = Partial<ExtractPropTypes<typeof fixedProps>>;
export type FlexLayoutProps = Partial<ExtractPropTypes<typeof flexLayoutProps>>;
export type HorizontalFlexLayoutProps = Partial<ExtractPropTypes<typeof horizontalFlexLayoutProps>>;
export type ScrollLayoutProps = Partial<ExtractPropTypes<typeof scrollLayoutProps>>;
export type ToolBarLayoutProps = Partial<ExtractPropTypes<typeof toolBarLayoutProps>>;
export type VerticalFlexLayoutProps = Partial<ExtractPropTypes<typeof verticalFlexLayoutProps>>;
