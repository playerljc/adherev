export interface IMenuProps {
    data: IData[];
    className: string;
    styleName: string;
}
export interface IMenuItemProps {
    data: IData;
}
export declare type ISubMenuProps = IMenuProps;
export interface ContextMenuType {
    isUse?: () => boolean;
    use?: (Vue: any) => void;
    open: (data: IData, config: IConfig) => void;
    close: (params: {
        vm: any;
        el: HTMLElement;
    }) => void;
    setConfig: (gc: any) => void;
}
export interface IContextMenuComponentProps {
    data: IData[];
    config: IData;
    el: HTMLElement;
}
export interface IConfig {
    x: number;
    y: number;
    width: number;
    maskClosable: boolean;
    handler: Function;
    className: string;
}
export interface IData {
    name: string | object | Function;
    icon: string | object | Function;
    id: string;
    disabled: boolean;
    separation: boolean;
    attribute: any;
    children: IData[];
    className: string;
    styleName: string;
    subMenuClassName: string;
    subMenuStyleName: string;
}
