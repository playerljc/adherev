export declare const PlayGroundPagePropTypes: {
    defaultActiveAnchor: {
        type: StringConstructor;
        default: string;
    };
    anchors: {
        type: ArrayConstructor;
        default: () => never[];
    };
    anchorPosition: {
        type: ObjectConstructor;
        default: () => {
            top: number;
            width: number;
        };
    };
    scrollEl: {
        type: {
            new (): HTMLElement;
            prototype: HTMLElement;
        };
        default: () => null;
    };
};
declare const _default: {
    name: string;
    props: {
        defaultActiveAnchor: {
            type: StringConstructor;
            default: string;
        };
        anchors: {
            type: ArrayConstructor;
            default: () => never[];
        };
        anchorPosition: {
            type: ObjectConstructor;
            default: () => {
                top: number;
                width: number;
            };
        };
        scrollEl: {
            type: {
                new (): HTMLElement;
                prototype: HTMLElement;
            };
            default: () => null;
        };
    };
    computed: {
        getAnchors(): any;
    };
    render(h: any): any;
};
export default _default;
