import { PermissionFun } from './permission';
declare const _default: {
    Permission: any;
    PermissionFun: typeof PermissionFun;
    setPermission: (permission: any[]) => void;
    checkPermission: (allPermission: any, currentPermissions: any[] | undefined) => boolean;
    getPermission: () => any;
    isUse: () => boolean;
    use: (Vue: {
        use: (arg0: any) => void;
    }) => void;
};
export default _default;
