import { VNode } from 'vue';
/**
 * Space
 */
declare const Space: {
    name: string;
    props: {
        direction: {
            type: StringConstructor;
            default: string;
            validator(value: any): boolean;
        };
        size: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
    };
    computed: {
        getStyle(): {
            display: string;
            height: string;
            margin: string;
            width?: undefined;
        } | {
            width: string;
            height: string;
            margin: string;
            display?: undefined;
        };
    };
    render(h: any): VNode;
};
/**
 * SpaceGroup
 */
export declare const SpaceGroup: {
    name: string;
    props: {
        direction: {
            type: StringConstructor;
            default: string;
            validator(value: any): boolean;
        };
        size: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        className: {
            type: StringConstructor;
            required: boolean;
            default: string;
        };
    };
    render(h: any): VNode;
};
export default Space;
