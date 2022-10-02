export declare const PlayGroundTabPropTypes: {
    active: {
        type: StringConstructor;
        default: string;
    };
    config: {
        type: ArrayConstructor;
        default: () => never[];
    };
    cardProps: {
        type: ObjectConstructor;
        default: () => null;
    };
    isActive: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const PlayGroundTab: any;
export default PlayGroundTab;
