import Util from '@baifendian/adherev-util';

import Dict from '@baifendian/adherev-util-dict';

/**
 * initBasicDict
 * Resource提供的字典命名规范 Resource${业务分组}${实际业务名称}
 */
function initBasicDict() {
  // @ts-ignore
  const requireComponent = require.context('./dict', false, /.*\.(js)$/);

  requireComponent.keys().forEach((path) => {
    const dict = requireComponent(path).default;

    if (dict && Util.isObject(dict)) {
      if ('initStatic' in dict && Util.isFunction(dict.initStatic)) {
        dict.initStatic();
      }

      if ('initRemote' in dict && Util.isFunction(dict.initRemote)) {
        dict.initRemote();
      }
    }
  });
}

// 初始化一些基本的字典配置
initBasicDict();

export default {
  Dict,
};
