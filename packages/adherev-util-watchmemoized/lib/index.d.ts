import { App, Plugin } from 'vue';
declare const _default: {
    install: (app: App<any>) => void;
    createRef: import("@baifendian/adhere-util-watchmemoized/lib/types").ICreateRefFun;
    memoized: {
        watch: {
            all: import("@baifendian/adhere-util-watchmemoized/lib/types").IWatchAllFun;
            race: import("@baifendian/adhere-util-watchmemoized/lib/types").IWatchRaceFun;
        };
        createMemoFun: import("@baifendian/adhere-util-watchmemoized/lib/types").ICreateMemoFun;
    };
    watch: {
        create: import("@baifendian/adhere-util-watchmemoized/lib/types").IWatchCreateFun;
    };
} & Plugin;
export default _default;
