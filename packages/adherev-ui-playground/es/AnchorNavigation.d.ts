export declare const AnchorNavigationPropTypes: {
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
declare const AnchorNavigation: any;
export default AnchorNavigation;
