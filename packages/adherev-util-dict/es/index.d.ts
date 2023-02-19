import { App, Plugin } from 'vue';
declare const _default: {
    handlers: object;
    value: any;
    init: import("@baifendian/adhere-util-dict/lib/types").InitFunc;
} & {
    install?: ((app: App<any>) => App<any>) | undefined;
} & Plugin;
export default _default;
