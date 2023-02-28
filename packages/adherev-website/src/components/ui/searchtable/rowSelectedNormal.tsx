import { SearchTable } from '@baifendian/adherev';

import Table from './table';

export default {
  mixins: [Table],
  methods: {
    getRowSelectionMode() {
      return SearchTable.ROW_SELECTION_NORMAL_MODE;
    },
  },
};
