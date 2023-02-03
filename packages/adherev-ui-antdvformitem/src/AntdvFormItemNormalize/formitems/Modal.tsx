import { Modal } from 'ant-design-vue';

import Resource from '@baifendian/adherev-util-resource';

import { HOC, assignAttrs } from '../util';

const Wrap = HOC(Modal, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(Modal, context, Wrap.defaultProps);

    return h(Modal, context.data, context.children);
  },
});

Wrap.defaultProps = {
  closable: true,
  centered: true,
  maskClosable: true,
  destroyOnClose: true,
  zIndex: Resource.Dict.value.ResourceNormalMaxZIndex.value,
};

export default Wrap;
