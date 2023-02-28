import { App, Plugin } from 'vue';
import { Permission, PermissionFun, checkPermission, getPermission } from './permission';
declare const _default: {
    Permission: import("vue").DefineComponent<{
        allPermission: import("vue-types").VueTypeValidableDef<string[]> & {
            default: () => string[];
        };
        permissions: import("vue-types").VueTypeValidableDef<(string | string[])[]>;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        allPermission: import("vue-types").VueTypeValidableDef<string[]> & {
            default: () => string[];
        };
        permissions: import("vue-types").VueTypeValidableDef<(string | string[])[]>;
    }>>, {
        allPermission: string[];
    }>;
    PermissionFun: typeof PermissionFun;
    setPermission: (permission: any[]) => void;
    checkPermission: (allPermission: any, currentPermissions: any[] | undefined) => boolean;
    getPermission: () => any;
    install: (app: App<any>) => App<any>;
} & Plugin & {
    readonly Permission: typeof Permission;
    readonly PermissionFun: typeof PermissionFun;
    readonly checkPermission: typeof checkPermission;
    readonly getPermission: typeof getPermission;
};
export default _default;
