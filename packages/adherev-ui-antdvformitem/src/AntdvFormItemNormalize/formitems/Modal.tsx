import { Modal } from 'ant-design-vue';

import Resource from '@baifendian/adherev-util-resource';

import { HOC, assignAttrs } from '../util';

const Wrap: any = HOC(Modal, {
  props(props, getEl) {
    return assignAttrs(props, Wrap.defaultProps, getEl?.());
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
