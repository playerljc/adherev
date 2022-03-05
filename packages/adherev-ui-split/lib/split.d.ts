/**
 * Split
 */
declare const Split: {
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
    methods: {
        getStyle(): {
            display: string;
            width: string;
            height: string;
            margin: string;
        } | {
            width: string;
            height: string;
            margin: string;
            display?: undefined;
        };
    };
    render(h: any): any;
};
/**
 * SplitGroup
 */
export declare const SplitGroup: {
    name: string;
    props: {
        direction: {
            type: StringConstructor;
            default: string;
            validator(value: any): boolean;
        };
        size: {
            type: (StringConstructor | NumberConstructor)[];
            required: boolean;
            default: number;
        };
        className: {
            type: StringConstructor;
            required: boolean;
            default: string;
        };
    };
    render(h: any): any;
};
export default Split;
