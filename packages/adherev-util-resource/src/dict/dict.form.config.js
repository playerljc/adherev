import Dict from '@baifendian/adherev-util-dict';
import Intl from '@baifendian/adherev-util-intl';

export default {
  initStatic() {
    Dict.handlers.FormInputNumberRule = () => ({
      whitespace: true,
      type: 'number',
      message: Intl.tv('输入的值在1~200之间'),
      min: 1,
      max: 200,
    });

    Dict.handlers.FormInputStringRule = () => ({
      whitespace: true,
      type: 'string',
      message: Intl.tv('输入的内容在100个字符之内'),
      min: 1,
      max: 100,
    });

    Dict.handlers.FormPopupContainer = () => (el) => el.parentElement;
  },
};
