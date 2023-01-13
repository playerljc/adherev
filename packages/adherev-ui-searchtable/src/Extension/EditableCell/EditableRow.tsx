/**
 * EditableRow
 * @description 行编辑
 * @param columns
 * @param value
 * @constructor
 */
// import { Form } from 'ant-design-vue';
import { CreateElement, VNode } from 'vue';

import Util from '@baifendian/adherev-util';

const {
  _util: { cloneElement },
} = Util;

const EditableRow = {
  // provide() {
  //   return {
  //     getEditableRowFormIns: this.getEditableRowFormIns,
  //   };
  // },
  // data() {
  //   return {
  //     editableRow: {
  //       form: this.$form.createForm(this, { name: 'editableRowForm' }),
  //     },
  //   };
  // },
  methods: {
    /**
     * useEditableRow
     * @description 固定的调用，操作
     * @param h createElement
     * @param trVNode trVNode
     */
    useEditableRow(h: CreateElement, trVNode: VNode): VNode {
      let res = trVNode;

      if ((this.props.columns || []).some((column) => !!column?.$editable?.editable)) {
        res = cloneElement(trVNode, {
          // children: [<Form from={this.editableRow.form}></Form>, ...(trVNode?.children || [])],
          children: [...(trVNode?.children || [])],
        });
      }

      return res;
    },
    // /**
    //  * getEditableRowFormIns
    //  * @description 获取form对象实例
    //  */
    // getEditableRowFormIns() {
    //   return this.form;
    // },
  },
};

export default EditableRow;
