import { IComponent, IConfig, IData } from './types';
export declare type ContextReturnType = {
    config: IConfig;
    el: HTMLElement;
};
export declare const contextMenuProps: {
    data: import("vue-types").VueTypeValidableDef<IData[]> & {
        default: () => IData[];
    };
    config: import("vue-types").VueTypeValidableDef<IConfig> & {
        default: () => IConfig;
    };
    el: import("vue-types").VueTypeValidableDef<HTMLElement> & {
        default: () => HTMLElement;
    };
};
declare const ContextMenu: IComponent;
export default ContextMenu;
