import { App, Plugin } from 'vue';
declare const _default: {
    Fetch: typeof import("@baifendian/adhere-util-iframeio/lib/fetch").default;
    Server: typeof import("@baifendian/adhere-util-iframeio/lib/server").default;
    Router: typeof import("@baifendian/adhere-util-iframeio/lib/server/router").default;
    Compose: typeof import("@baifendian/adhere-util-iframeio/lib/server/compose").default;
} & {
    install?: ((app: App<any>) => App<any>) | undefined;
} & Plugin;
export default _default;
