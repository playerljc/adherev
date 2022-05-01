import Table from './table';
export default {
    mixins: [Table],
    methods: {
        getColumns() {
            return super.getColumns().map((column) => ({
                ...column,
                resizable: true,
            }));
        },
    },
};
//# sourceMappingURL=columnResizeTable.jsx.map