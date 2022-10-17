import type { CSSProperties, VNode } from 'vue';
export interface ContextType {
    direction: 'vertical' | 'horizontal';
}
export interface FlexLayoutProps {
    direction?: 'vertical' | 'horizontal';
}
export interface FixedProps {
    fit?: boolean;
}
export interface AutoProps {
    autoFixed?: boolean;
    fit?: boolean;
}
export interface VerticalFlexLayoutProps {
    topClassName?: string;
    topStyle?: CSSProperties;
    rightClassName?: string;
    rightStyle?: CSSProperties;
    bottomClassName?: string;
    bottomStyle?: CSSProperties;
    leftClassName?: string;
    leftStyle?: CSSProperties;
    mainClassName?: string;
    mainStyle?: CSSProperties;
    mainAutoWrapClassName?: string;
    mainAutoStyle?: CSSProperties;
    mainWrapClassName?: string;
    mainWrapStyle?: CSSProperties;
    renderTop?: any;
    renderRight?: any;
    renderBottom?: any;
    renderLeft?: any;
    renderMain?: any;
    topProps?: FixedProps;
    rightProps?: FixedProps;
    bottomProps?: FixedProps;
    leftProps?: FixedProps;
    mainProps?: AutoProps;
    mainAutoWrapProps?: AutoProps;
}
export interface HorizontalFlexLayoutProps {
    topClassName?: string;
    topStyle?: CSSProperties;
    rightClassName?: string;
    rightStyle?: CSSProperties;
    bottomClassName?: string;
    bottomStyle?: CSSProperties;
    leftClassName?: string;
    leftStyle?: CSSProperties;
    mainClassName?: string;
    mainStyle?: CSSProperties;
    mainAutoWrapClassName?: string;
    mainAutoStyle?: CSSProperties;
    mainWrapClassName?: string;
    mainWrapStyle?: CSSProperties;
    renderTop?: any;
    renderRight?: any;
    renderBottom?: any;
    renderLeft?: any;
    renderMain?: any;
    topProps?: FixedProps;
    rightProps?: FixedProps;
    bottomProps?: FixedProps;
    leftProps?: FixedProps;
    mainProps?: AutoProps;
    mainAutoWrapProps?: AutoProps;
}
export interface ToolBarLayoutProps {
    topClassName?: string;
    topStyle?: CSSProperties;
    bottomClassName?: string;
    bottomStyle?: CSSProperties;
    mainClassName?: string;
    mainStyle?: CSSProperties;
    mainAutoWrapClassName?: string;
    mainAutoStyle?: CSSProperties;
    mainWrapClassName?: string;
    mainWrapStyle?: CSSProperties;
    topToolBarItems?: VNode[];
    bottomToolBarItems?: VNode[];
    topProps?: FixedProps;
    bottomProps?: FixedProps;
    mainProps?: AutoProps;
    mainAutoWrapProps?: AutoProps;
}
export interface BackLayoutProps {
    topClassName?: string;
    topStyle?: CSSProperties;
    bottomClassName?: string;
    bottomStyle?: CSSProperties;
    mainClassName?: string;
    mainStyle?: CSSProperties;
    mainAutoWrapClassName?: string;
    mainAutoStyle?: CSSProperties;
    mainWrapClassName?: string;
    mainWrapStyle?: CSSProperties;
    topToolBarItems?: VNode[];
    topProps?: FixedProps;
    bottomProps?: FixedProps;
    mainProps?: AutoProps;
    mainAutoWrapProps?: AutoProps;
    backPath?: string;
    enforceBackPath?: string;
    isShowBack?: boolean;
    history?: any;
    backTitle?: string | VNode;
}
export interface ScrollLayoutProps {
    scrollY?: boolean;
}
export interface ScrollLayoutContextType {
    getEl: () => HTMLElement | null;
}
export interface IComponent {
    isUse(): boolean;
    use(Vue: any): void;
    Fixed: any;
    Auto: any;
    HorizontalFlexLayout: any;
    VerticalFlexLayout: any;
    BackLayout: any;
    ScrollLayout: any;
    ToolBarLayout: any;
    selectorPrefix: string;
}
