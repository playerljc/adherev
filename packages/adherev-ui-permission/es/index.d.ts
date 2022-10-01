import { PermissionFun } from './permission';
declare const _default: {
    Permission: any;
    PermissionFun: typeof PermissionFun;
    setPermission: (permission: any) => void;
    checkPermission: (allPermission: any, currentPermissions: any) => boolean;
    getPermission: () => any;
    isUse: () => boolean;
    use: (Vue: any) => void;
};
export default _default;
