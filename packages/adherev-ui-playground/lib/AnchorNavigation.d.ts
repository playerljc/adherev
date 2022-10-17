import { ExtractPropTypes } from 'vue';
export declare const anchorNavigationProps: {
    defaultActiveAnchor: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    anchors: import("vue-types").VueTypeValidableDef<{
        anchor: string;
        name: string;
    }[]> & {
        default: () => {
            anchor: string;
            name: string;
        }[];
    };
    anchorPosition: import("vue-types").VueTypeValidableDef<{
        top: number;
        width: number;
    }> & {
        default: () => {
            top: number;
            width: number;
        };
    };
    scrollEl: import("vue-types").VueTypeValidableDef<HTMLElement>;
};
export declare type AnchorNavigationProps = Partial<ExtractPropTypes<typeof anchorNavigationProps>>;
declare const _default: import("vue").DefineComponent<{
    defaultActiveAnchor: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    anchors: import("vue-types").VueTypeValidableDef<{
        anchor: string;
        name: string;
    }[]> & {
        default: () => {
            anchor: string;
            name: string;
        }[];
    };
    anchorPosition: import("vue-types").VueTypeValidableDef<{
        top: number;
        width: number;
    }> & {
        default: () => {
            top: number;
            width: number;
        };
    };
    scrollEl: import("vue-types").VueTypeValidableDef<HTMLElement>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    defaultActiveAnchor: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    anchors: import("vue-types").VueTypeValidableDef<{
        anchor: string;
        name: string;
    }[]> & {
        default: () => {
            anchor: string;
            name: string;
        }[];
    };
    anchorPosition: import("vue-types").VueTypeValidableDef<{
        top: number;
        width: number;
    }> & {
        default: () => {
            top: number;
            width: number;
        };
    };
    scrollEl: import("vue-types").VueTypeValidableDef<HTMLElement>;
}>>, {
    defaultActiveAnchor: string;
    anchors: {
        anchor: string;
        name: string;
    }[];
    anchorPosition: {
        top: number;
        width: number;
    };
}>;
export default _default;
