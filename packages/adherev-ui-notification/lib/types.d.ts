/**
 * IConfig
 * @interface IConfig
 */
export interface IConfig {
    style: 'ios' | 'material';
    type: 'top' | 'bottom';
    onCreate?: () => void;
    onShow?: () => void;
    onCloseBefore?: () => void;
    onCloseAfter?: () => void;
}
/**
 * IShowConfig
 * @interface IShowConfig
 */
export interface IShowConfig {
    closed: boolean;
    children: Object | Function | string;
}
/**
 * IShowStandardConfig
 * @interface IShowStandardConfig
 */
export interface IShowStandardConfig {
    closed: boolean;
    headerLabel: Object | Function | string;
    headerIcon: string;
    title: Object | Function | string;
    text: Object | Function | string;
    icon: string;
    datetime: Object | Function | string;
}
