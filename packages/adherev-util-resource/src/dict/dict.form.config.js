import Dict from '@baifendian/adherev-util-dict';
import Intl from '@baifendian/adherev-util-intl';

export default {
  initStatic() {
    Dict.handlers.FormInputNumberRule = () => ({
      type: 'number',
      message: Intl.tv('输入的值在1~200之间'),
      min: 1,
      max: 200,
    });

    Dict.handlers.FormWhitespaceRule = () => ({
      message: Intl.tv('输入的内容前后不能有空格'),
      whitespace: true,
    });

    Dict.handlers.FormInputStringRule = () => ({
      type: 'string',
      message: Intl.tv('输入的内容在100个字符之内'),
      min: 1,
      max: 100,
    });

    Dict.handlers.FormPopupContainer = () => (el) => el.parentElement;
  },
};
