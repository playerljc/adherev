import { RouterLink } from 'vue-router';
/**
 * LinkColumn
 * @param record
 * @param rowIndex
 * @param dataIndex
 * @param to
 */
export default {
    props: {
        record: {
            type: Object,
        },
        rowIndex: {
            type: Number,
        },
        dataIndex: {
            type: Number,
        },
        to: {
            type: String,
        },
    },
    name: 'adv-searchtable-link-column',
    render(h) {
        return (<RouterLink to={this.to}>
        {this.$scopedSlots.default
                ? this.$scopedSlots.default({
                    record: this.record,
                    rowIndex: this.rowIndex,
                    dataIndex: this.dataIndex,
                })
                : this.record[this.dataIndex]}
      </RouterLink>);
    },
};
// export default ({ record, rowIndex, dataIndex, to, children }) => {
//   return (
//     <RouterLink to={to}>
//       {children ? children({ record, rowIndex, dataIndex }) : record[dataIndex]}
//     </RouterLink>
//   );
// };
//# sourceMappingURL=index.jsx.map