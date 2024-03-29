// CheckBoxCheckAllVerticalFormItem
import { defineComponent } from 'vue';

import Intl from '@baifendian/adherev-util-intl';

import { Checkbox } from '../../AntdvFormItemNormalize';
import CheckBoxVerticalFormItem from '../CheckBoxVerticalFormItem';

export default defineComponent({
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
  render() {
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
          <Children
            {...{
              ...this.$props,
              ...this.$attrs,
              onChange: (value) => this.$emit('change', value),
            }}
          >
            {this.$slots}
          </Children>
        </div>
      </div>
    );
  },
});
