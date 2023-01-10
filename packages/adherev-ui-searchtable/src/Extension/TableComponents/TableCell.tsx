import { PropType } from 'vue';

import { ColumnTypeExt } from '../../types';

export default {
  props: {
    rowIndex: {
      type: Number,
    },
    record: {
      type: Object as PropType<{
        [propName: string]: any;
      }>,
    },
    column: {
      type: Object as PropType<ColumnTypeExt>,
    },
    columns: {
      type: Array as PropType<ColumnTypeExt[]>,
    },
  },
  render(h) {
    // console.log('cell', this.$parent.record);
    return <td>{this.$slots.default}</td>;
  },
};
