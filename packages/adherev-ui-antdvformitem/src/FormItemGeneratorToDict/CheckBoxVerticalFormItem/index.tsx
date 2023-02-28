import { CheckboxGroupProps } from 'ant-design-vue/es/checkbox';
import { defineComponent, h } from 'vue';
import { array, object } from 'vue-types';

import { Checkbox, Col, Row } from '../../AntdvFormItemNormalize';

const selectorPrefix = 'adherev-ui-antdformitem';

export default defineComponent({
  name: 'CheckBoxVerticalFormItem',
  props: {
    checkBoxGroupProps: object<CheckboxGroupProps>().def({}),
    value: array().def([]),
    dataSource: array().def([]),
  },
  emits: ['change'],
  render() {
    return h(
      Checkbox.Group,
      {
        value: this.value,
        ...this.checkBoxGroupProps,
        ...this.$attrs,
        onChange: (value) => this.$emit('change', value),
      },
      this.dataSource.map((t) => (
        <Row gutter={32}>
          <Col>
            {h(
              Checkbox,
              {
                key: t.value,
                value: t.value,
                disabled: t.disabled,
                class: `${selectorPrefix}-check-box-vertical`,
              },
              t.label,
            )}
          </Col>
        </Row>
      )),
    );
  },
});
