import { App } from 'vue';

// import Util from '@baifendian/adherev-util';
import Dict from '@baifendian/adherev-util-dict';

import FlowConfig from './dict/dict.flow.config.js';
import FormConfig from './dict/dict.form.config.js';
import GisConfig from './dict/dict.gis.config.js';
import LocalsConfig from './dict/dict.locals.config.js';
import MimeConfig from './dict/dict.mime.config.js';
import MomentConfig from './dict/dict.moment.config.js';
import NormalConfig from './dict/dict.normal.config.js';

function initDict(dict) {
  dict?.initStatic?.();
  dict?.initRemote?.();
}

/**
 * initBasicDict
 * Resource提供的字典命名规范 Resource${业务分组}${实际业务名称}
 */
function initBasicDict() {
  [FlowConfig, FormConfig, GisConfig, LocalsConfig, MimeConfig, MomentConfig, NormalConfig].forEach(
    (dict) => initDict(dict),
  );

  /*if (typeof require === 'undefined') {
    // vite
    // @ts-ignore
    const modules = import.meta.glob('./dict/!*.js', { eager: true });

    for (const path in modules) {
      const dict = modules[path]();

      if (dict && Util.isObject?.(dict)) {
        if ('initStatic' in dict && Util.isFunction?.(dict.initStatic)) {
          dict.initStatic();
        }

        if ('initRemote' in dict && Util.isFunction?.(dict.initRemote)) {
          dict.initRemote();
        }
      }
    }
  }
  else {
    console.log('webpack');
    // webpack
    // @ts-ignore
    const requireComponent = require?.context?.('./dict', false, /.*\.(js)$/) || {};

    requireComponent?.keys?.()?.forEach?.((path) => {
      const dict = requireComponent(path).default;

      if (dict && Util.isObject?.(dict)) {
        if ('initStatic' in dict && Util.isFunction?.(dict.initStatic)) {
          dict.initStatic();
        }

        if ('initRemote' in dict && Util.isFunction?.(dict.initRemote)) {
          dict.initRemote();
        }
      }
    });
  }*/
}

// 初始化一些基本的字典配置
initBasicDict();

const Resource: {
  install?: (app: App) => void;
  Dict: any;
} = {
  Dict,
};

export default Resource;
