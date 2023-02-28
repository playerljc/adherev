import { App, Plugin } from 'vue';
declare const _default: ((history: any, routePath?: string | undefined) => void) & {
    install?: ((app: App<any>) => App<any>) | undefined;
} & Plugin;
export default _default;
