import { Upload } from 'ant-design-vue';

import { HOC, assignAttrs } from '../util';

const Wrap = HOC(Upload, {
  functional: true,
  inject: ['getEl'],
  render(h, context) {
    assignAttrs(Upload, context, Wrap.defaultProps);

    return h(Upload, context.data, context.children);
  },
});

Wrap.defaultProps = {
  name: 'file',
  withCredentials: true,
};

export default Wrap;
