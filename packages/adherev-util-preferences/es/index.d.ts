import { App, Plugin } from 'vue';
declare const _default: {
    install: (app: App<any>) => App<any>;
    putStringByLocal(key: string, value: string): void;
    getStringByLocal(key: string): string | null;
    putObjectByLocal(key: string, object: Object): void;
    getObjectByLocal(key: string): Object | null;
    removeByLocal(key: string): void;
    putStringBySession(key: string, value: string): void;
    getStringBySession(key: string): string | null;
    putObjectBySession(key: string, object: Object): void;
    getObjectBySession(key: string): Object | null;
    removeBySession(key: string): void;
} & Plugin;
export default _default;
