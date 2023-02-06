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
export declare type AnchorNavigationProps = Partial<ExtractPropTypes<typeof anchorNavigationProps>>;
export declare type TableProps = Partial<ExtractPropTypes<typeof tableProps>>;
export declare type PropsProps = Partial<ExtractPropTypes<typeof propsProps>>;
export declare type PlayGroundTabProps = Partial<ExtractPropTypes<typeof playGroundTabProps>>;
export declare type PlayGroundMulitProps = Partial<ExtractPropTypes<typeof playGroundMulitProps>>;
export declare type PlayGroundBaseProps = Partial<ExtractPropTypes<typeof playGroundBaseProps>>;
export declare type PlayGroundProps = Partial<ExtractPropTypes<typeof playGroundProps>>;
export declare type FunctionPropsProps = Partial<ExtractPropTypes<typeof functionPropsProps>>;
export declare type CollapseProps = Partial<ExtractPropTypes<typeof collapseProps>>;
export declare type CodeTabPanelProps = Partial<ExtractPropTypes<typeof codeTabPanelProps>>;
export declare type CodePanelProps = Partial<ExtractPropTypes<typeof codePanelProps>>;
export declare type CodeBoxPanelProps = Partial<ExtractPropTypes<typeof codeBoxPanelProps>>;
export declare type CardProps = Partial<ExtractPropTypes<typeof cardProps>>;
export declare type PlayGroundPageProps = Partial<ExtractPropTypes<typeof playGroundPageProps>>;
export declare type TabProps = Partial<ExtractPropTypes<typeof tabProps>>;
