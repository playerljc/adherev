import { App, Plugin } from 'vue';
declare const _default: ((el?: HTMLElement | undefined) => () => void) & {
    install?: ((app: App<any>) => App<any>) | undefined;
} & Plugin;
export default _default;
