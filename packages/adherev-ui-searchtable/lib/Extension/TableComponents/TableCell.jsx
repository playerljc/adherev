export default {
    props: {
        rowIndex: {
            type: Number,
        },
        record: {
            type: Object,
        },
        column: {
            type: Object,
        },
        columns: {
            type: Array,
        },
    },
    render(h) {
        // console.log('cell', this.$parent.record);
        return <td>{this.$slots.default}</td>;
    },
};
//# sourceMappingURL=TableCell.jsx.map