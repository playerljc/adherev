import { PropType } from 'vue';
export declare const cardPropTypes: {
    headerClassName: {
        type: StringConstructor;
        default: string;
    };
    headerStyle: {
        type: StringConstructor;
        default: string;
    };
    bodyClassName: {
        type: StringConstructor;
        default: string;
    };
    bodyStyle: {
        type: StringConstructor;
        default: string;
    };
    actionClassName: {
        type: StringConstructor;
        default: string;
    };
    actionStyle: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    extra: {
        type: ObjectConstructor;
        default: () => null;
    };
    actions: {
        type: ArrayConstructor;
        default: () => never[];
    };
    description: {
        type: PropType<{
            title: string;
            info: string;
        }>;
        default: () => null;
    };
};
declare const Card: any;
export default Card;
