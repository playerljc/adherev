import { App, Plugin } from 'vue';
declare const _default: {
    install: (app: App<any>) => App<any>;
    Events: typeof import("@baifendian/adhere-util-emitter/lib/events").default;
} & Plugin;
export default _default;
