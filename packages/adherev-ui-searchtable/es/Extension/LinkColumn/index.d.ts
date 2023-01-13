/**
 * LinkColumn
 * @param record
 * @param rowIndex
 * @param dataIndex
 * @param to
 */
declare const _default: {
    props: {
        record: {
            type: ObjectConstructor;
        };
        rowIndex: {
            type: NumberConstructor;
        };
        dataIndex: {
            type: NumberConstructor;
        };
        to: {
            type: StringConstructor;
        };
    };
    name: string;
    render(h: any): JSX.Element;
};
export default _default;
