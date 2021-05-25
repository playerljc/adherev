import Dict from '@baifendian/adherev-util-dict';

export default {
  initStatic() {
    Dict.handlers.ResourceMomentFormatYear = () => 'YYYY';

    Dict.handlers.ResourceMomentFormat10 = () => 'YYYY-MM-DD';

    Dict.handlers.ResourceMomentFormatFull = () => 'YYYY-MM-DD HH:mm:ss';
  },
};
