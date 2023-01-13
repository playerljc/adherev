// CheckBoxCheckAllVerticalFormItem
import { Checkbox } from 'ant-design-vue';

import Intl from '@baifendian/adherev-util-intl';

import CheckBoxVerticalFormItem from '../CheckBoxVerticalFormItem';

export default {
  name: 'CheckBoxCheckAllVerticalFormItem',
  props: {
    ...CheckBoxVerticalFormItem.props,
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
    const Children = CheckBoxVerticalFormItem;

    return (
      <div>
        <div style="margin-bottom: 10px;">
          <Checkbox
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
