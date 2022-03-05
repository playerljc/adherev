export interface IMenuProps {
    data: Array<IData>;
    className: string;
    styleName: string;
}
export interface IMenuItemProps {
    data: IData;
}
export declare type ISubMenuProps = IMenuProps;
export declare type ContextMenuType = {
    isUse?(): boolean;
    use?(Vue: any): void;
    open(data: IData, config: IConfig): void;
    close(params: {
        vm: any;
        el: HTMLElement;
    }): any;
};
export interface IContextMenuComponentProps {
    data: Array<IData>;
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
    name: string | Object | Function;
    icon: string | Object | Function;
    id: string;
    disabled: boolean;
    separation: boolean;
    attribute: Object;
    children: Array<IData>;
    className: string;
    styleName: string;
    subMenuClassName: string;
    subMenuStyleName: string;
}
