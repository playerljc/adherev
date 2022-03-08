import { CSSProperties } from 'vue';
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
export interface IComponent {
    isUse?(): boolean;
    use?(Vue: any): void;
    open(data: IData[], defaultConfig: IConfig): void;
    close(params: {
        vm: any;
        el: HTMLElement;
    }): void;
}
