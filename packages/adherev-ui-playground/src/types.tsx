import { CSSProperties, ExtractPropTypes, VNode } from 'vue';

import { cardProps } from '@/Card';
import { codePanelProps } from '@/CodePanel';
import { codeTabPanelProps } from '@/CodeTabPanel';
import { playGroundMulitProps } from '@/PlayGroundMulit';

import { anchorNavigationProps } from './AnchorNavigation';
import { codeBoxPanelProps } from './CodeBoxPanel';
import { collapseProps } from './Collapse';
import { functionPropsProps } from './FunctionProps';
import { playGroundProps } from './PlayGround';
import { playGroundBaseProps } from './PlayGroundBase';
import { playGroundPageProps } from './PlayGroundPage';
import { playGroundTabProps } from './PlayGroundTab';
import { propsProps } from './Props';
import { tabProps } from './SimpleTabs';
import { tableProps } from './table';

export interface IColumnItem {
  title?: string;
  className?: string;
  style?: CSSProperties;
  align?: string;
  width?: string | null;
  key: string;
  dataIndex: string;
  valign?: string;
  slot?: string;
}

export interface IDataItemType {
  params: string | VNode;
  desc: string | VNode;
  type: string | VNode;
  defaultVal: string | VNode;
}

export type AnchorNavigationProps = Partial<ExtractPropTypes<typeof anchorNavigationProps>>;

export type TableProps = Partial<ExtractPropTypes<typeof tableProps>>;

export type PropsProps = Partial<ExtractPropTypes<typeof propsProps>>;

export type PlayGroundTabProps = Partial<ExtractPropTypes<typeof playGroundTabProps>>;

export type PlayGroundMulitProps = Partial<ExtractPropTypes<typeof playGroundMulitProps>>;

export type PlayGroundBaseProps = Partial<ExtractPropTypes<typeof playGroundBaseProps>>;

export type PlayGroundProps = Partial<ExtractPropTypes<typeof playGroundProps>>;

export type FunctionPropsProps = Partial<ExtractPropTypes<typeof functionPropsProps>>;

export type CollapseProps = Partial<ExtractPropTypes<typeof collapseProps>>;

export type CodeTabPanelProps = Partial<ExtractPropTypes<typeof codeTabPanelProps>>;

export type CodePanelProps = Partial<ExtractPropTypes<typeof codePanelProps>>;

export type CodeBoxPanelProps = Partial<ExtractPropTypes<typeof codeBoxPanelProps>>;

export type CardProps = Partial<ExtractPropTypes<typeof cardProps>>;

export type PlayGroundPageProps = Partial<ExtractPropTypes<typeof playGroundPageProps>>;

export type TabProps = Partial<ExtractPropTypes<typeof tabProps>>;
