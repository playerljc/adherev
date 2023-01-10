/**
 * EditableRow
 * @description 行编辑
 * @param columns
 * @param value
 * @constructor
 */
import { Form } from 'ant-design-vue';
import { VNode } from 'vue';

import Util from '@baifendian/adherev-util';

import { TableRowComponentHookFunctionParameter } from '../../types';

const {
  _util: { cloneElement },
} = Util;

const EditableRow = ({
  columns = [],
  value: trREL,
}: TableRowComponentHookFunctionParameter): VNode => {
  let res = trREL;

  if ((columns || []).some((column) => !!column?.$editable?.editable)) {
    res = cloneElement(trREL, {
      children: [<Form>{trREL?.children}</Form>],
    });
  }

  return res;
};

export default EditableRow;
