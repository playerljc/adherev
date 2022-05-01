import Table from './table';
import { SearchTable } from '@baifendian/adherev';
export default {
    mixins: [Table],
    methods: {
        getRowSelectionMode() {
            return SearchTable.ROW_SELECTION_CONTINUOUS_MODE;
        },
    },
};
//# sourceMappingURL=rowSelectedContinuous.jsx.map