import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { IImgArgs } from './types';
export declare const imageLazyProps: {
    imgArgs: import("vue-types").VueTypeValidableDef<IImgArgs> & {
        default: () => IImgArgs;
    };
};
declare const _default: import("vue").DefineComponent<{
    imgArgs: import("vue-types").VueTypeValidableDef<IImgArgs> & {
        default: () => IImgArgs;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    imgArgs: import("vue-types").VueTypeValidableDef<IImgArgs> & {
        default: () => IImgArgs;
    };
}>>, {
    imgArgs: IImgArgs;
}>;
export default _default;
