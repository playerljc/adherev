import { SearchTable } from '@baifendian/adherev';
const { Table } = SearchTable;
export default {
    mixins: [Table],
    methods: {
        getRowSelectionMode() {
            return $SearchTable.ROW_SELECTION_NORMAL_MODE;
        }
    },
};
//# sourceMappingURL=rowSelectedNormal.jsx.map