import { CreateElement, VNode } from 'vue';

// import Util from '@baifendian/adherev-util';
//
// const {
//   _util: { cloneElement },
// } = Util;

/**
 * EditableRow
 * @description 行编辑
 * @param columns
 * @param value
 * @constructor
 */
const EditableRow = {
  methods: {
    /**
     * useEditableRow
     * @description 固定的调用，操作
     * @param h createElement
     * @param trVNode trVNode
     */
    useEditableRow(h: CreateElement, trVNode: VNode): VNode {
      // let res = trVNode;
      //
      // if ((this.props.columns || []).some((column) => !!column?.$editable?.editable)) {
      //   res = cloneElement(trVNode, {
      //     children: [...(trVNode?.children || [])],
      //   });
      // }

      return trVNode;
    },
  },
};

export default EditableRow;
