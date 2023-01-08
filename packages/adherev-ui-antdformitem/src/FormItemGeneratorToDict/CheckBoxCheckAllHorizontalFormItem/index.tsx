// CheckBoxCheckAllHorizontalFormItem
import { Checkbox } from 'ant-design-vue';

import Intl from '@baifendian/adherev-util-intl';

import CheckBoxHorizontalFormItem from '../CheckBoxHorizontalFormItem';

export default {
  name: 'CheckBoxCheckAllHorizontalFormItem',
  props: {
    ...CheckBoxHorizontalFormItem.props,
  },
  emits: ['change'],
  data() {
    return {
      checkAll: (this.value || []).length === this.dataSource.length,
    };
  },
  watch: {
    value(value) {
      this.checkAll = (value || []).length === this.dataSource.length;
    },
    dataSource(dataSource) {
      this.checkAll = (this.value || []).length === dataSource.length;
    },
  },
  render(h) {
    const Children = CheckBoxHorizontalFormItem;

    return (
      <div>
        <div style="margin-bottom: 10px;">
          <Checkbox
            // @ts-ignore
            checked={this.checkAll}
            onChange={(e) => {
              this.$emit('change', e.target.checked ? this.dataSource.map((t) => t.value) : []);
            }}
          >
            {Intl.tv('全选')}
          </Checkbox>
        </div>

        <div>
          {/*@ts-ignore*/}
          <Children
            {...{
              props: this.$props,
              attrs: this.$attrs,
              scopedSlots: this.$scopedSlots,
              on: this.$listeners,
            }}
          />
        </div>
      </div>
    );
  },
};
