export declare const SectionPropTypes: {
    title: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    extra: {
        type: ObjectConstructor;
        default: () => null;
    };
};
declare const Section: any;
export default Section;
