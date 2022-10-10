import type { VNode } from 'vue';
export interface ISuspense {
    fetchData?: fetchData;
    showLoading: showLoading;
    renderInner: renderInner;
    isFirst: boolean;
    isFirstLoading: boolean;
}
export interface SuspenseProps {
    className?: string;
    style?: string;
    reset: boolean;
    firstLoading: VNode;
}
export interface SuspenseState {
}
export interface ISuspenseSync {
    isLoading: boolean;
    reset: Function;
}
export interface SuspenseSyncProps extends SuspenseProps {
    data: any;
    isEmpty: () => boolean;
    renderEmpty?: Function;
    children?: any;
}
export interface SuspenseSyncState extends SuspenseState {
    loading: boolean;
}
export interface SuspenseASyncProps extends SuspenseProps {
    isEmpty: () => boolean;
    renderEmpty?: Function;
    children?: Function;
    fetchData?: Function;
}
export interface SuspenseASyncState extends SuspenseState {
    loading: boolean;
}
export interface fetchData {
    (): any;
}
export interface showLoading {
    (): boolean;
}
export interface renderInner {
    (): VNode | null;
}
