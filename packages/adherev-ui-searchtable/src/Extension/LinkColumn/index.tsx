import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { number, object, string } from 'vue-types';

/**
 * LinkColumn
 * @param record
 * @param rowIndex
 * @param dataIndex
 * @param to
 */

export default defineComponent({
  props: {
    record: object().def({}),
    rowIndex: number(),
    dataIndex: number(),
    to: string(),
  },
  name: 'adv-searchtable-link-column',
  render() {
    return (
      <RouterLink to={this.to}>
        {this.$slots.default
          ? this.$slots.default({
              record: this.record,
              rowIndex: this.rowIndex,
              dataIndex: this.dataIndex,
            })
          : this.record[this.dataIndex]}
      </RouterLink>
    );
  },
});
