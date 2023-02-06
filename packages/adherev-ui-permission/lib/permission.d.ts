/**
 * setPermission - 设置拥有的所有权限
 * @param {Array<String>} permission
 */
export declare const setPermission: (permission: any[]) => void;
/**
 * getPermission - 获取拥有的所有权限
 * @return
 */
export declare const getPermission: () => any;
/**
 * checkPermission - 判断是否有权限方法
 * @param {Array<String>} allPermission
 * @param {String | Array<String>} currentPermissions 当前组件或者页面对应得权限key
 * @return boolean
 */
export declare const checkPermission: (allPermission: any, currentPermissions: any[] | undefined) => boolean;
export declare const permissionProps: {
    allPermission: import("vue-types").VueTypeValidableDef<string[]> & {
        default: () => string[];
    };
    permissions: import("vue-types").VueTypeValidableDef<(string | string[])[]>;
};
export declare const Permission: import("vue").DefineComponent<{
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
/**
 * PermissionFun - 函数方式实现
 * @param allPermission
 * @param permissions
 * @param match
 * @param noMatch
 * @constructor
 */
export declare function PermissionFun({ allPermission, permissions, match, noMatch }: {
    allPermission?: any;
    permissions: any;
    match: any;
    noMatch: any;
}): any;
