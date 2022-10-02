export declare const PlayGroundPropTypes: {
    codeText: {
        type: StringConstructor;
        default: string;
    };
    lang: {
        type: StringConstructor;
        default: string;
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
declare const PlayGround: any;
export default PlayGround;
