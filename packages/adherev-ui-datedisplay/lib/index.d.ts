import { App, Plugin } from 'vue';
declare const _default: {
    install: (app: App<any>) => App<any>;
    name: string;
} & Plugin & {
    [props: string]: any;
};
export default _default;
