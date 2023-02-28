import { App, CSSProperties, ExtractPropTypes } from 'vue';
import { contextMenuProps } from './ContextMenu';
import { menuProps } from './Menu';
import { menuItemProps } from './MenuItem';
import { subMenuProps } from './SubMenu';
export interface IMenuProps {
    data: Array<IData>;
    className: string;
    style: CSSProperties;
}
export interface IMenuItemProps {
    data: IData;
}
export interface IConfig {
    x: number;
    y: number;
    width: number;
    maskClosable: boolean;
    handler: Function;
    className: string;
    style: CSSProperties;
}
export interface IData {
    name?: string | Object | Function;
    icon?: string | Object | Function;
    id?: string;
    disabled?: boolean;
    separation?: boolean;
    attribute?: Object;
    children?: Array<IData>;
    className?: string;
    style?: CSSProperties;
    subMenuClassName?: string;
    subMenuStyle?: CSSProperties;
}
export interface IConfig {
    beforeMount(app: any): void;
}
export interface IComponent {
    install?: (app: App) => App<any>;
    open(data: IData[], defaultConfig: IConfig): void;
    close(params: {
        vm: any;
        el: HTMLElement;
    }): void;
    setConfig(config: IConfig): void;
}
export declare type ContextMenuProps = Partial<ExtractPropTypes<typeof contextMenuProps>>;
export declare type MenuProps = Partial<ExtractPropTypes<typeof menuProps>>;
export declare type MenuItemProps = Partial<ExtractPropTypes<typeof menuItemProps>>;
export declare type SubMenuProps = Partial<ExtractPropTypes<typeof subMenuProps>>;
