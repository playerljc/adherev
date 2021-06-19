import VueI18n from 'vue-i18n';
import { I18nOptions, Path, TranslateResult, Locale, IVueI18n } from 'vue-i18n/types';

// 组件的国际化文件
const finallyLocales = {
  en_US: require('./locales/en_US').default,
  zh_CN: require('./locales/zh_CN').default,
  pt_PT: require('./locales/pt_PT').default,
};

const intlMap = {};

let i18n: IVueI18n = null;

/**
 * initIntlMap - 初始化以中文为key,intl.get()为值的Map
 * @param zh_CN
 */
function initIntlMap(zh_CN) {
  const propertys = Object.getOwnPropertyNames(zh_CN);

  propertys.forEach((p) => {
    // 中文key 国际化值为值
    intlMap[zh_CN[p]] = p;
  });
}

/**
 * getLocal
 * @param data
 * @return object
 */
export function getLocal(data: Array<string>): object {
  const result = [...Array.from(new Set(data))];

  const local = {};

  for (let i = 0; i < result.length; i++) {
    local[`local${i + 1}`] = result[i];
  }

  return local;
}

/**
 * extend
 * @param Vue
 */
export function extend(Vue: any): void {
  if (!Vue.prototype.hasOwnProperty('$i18n')) {
    // $FlowFixMe
    Object.defineProperty(Vue.prototype, '$i18n', {
      get() {
        return this._i18n;
      },
    });
  }

  Vue.prototype.$tv = function (zh: Path, ...values: any): TranslateResult {
    const i18n = this.$i18n;
    const key = intlMap[zh];
    return i18n.t(key, i18n.locale, i18n._getMessages(), this, ...values);
  };

  Vue.prototype.$tcv = function (zh: Path, choice?: number, ...values: any): TranslateResult {
    const i18n = this.$i18n;
    const key = intlMap[zh];
    return i18n._tc(key, i18n.locale, i18n._getMessages(), this, choice, ...values);
  };

  Vue.prototype.$tev = function (zh: Path, locale?: Locale): boolean {
    const i18n = this.$i18n;
    const key = intlMap[zh];
    return i18n._te(key, i18n.locale, i18n._getMessages(), locale);
  };
}

/**
 * I18nFactory
 * @param config
 * @constructor
 */
const I18nFactory = function (config: I18nOptions = {}) {
  const { messages = {} } = config;

  // 整合用户的locales
  for (const lang in messages || {}) {
    if (lang in finallyLocales) {
      finallyLocales[lang] = Object.assign(finallyLocales[lang], (messages || {})[lang]);
    }
  }

  // 反转资源文件
  initIntlMap(finallyLocales.zh_CN);

  // i18n实例
  i18n = new VueI18n({
    ...config,
    ...{ messages: finallyLocales },
  });

  return i18n;
};

/**
 * tv
 * @param zh
 * @param values
 */
I18nFactory.tv = function (zh: Path, ...values: []) {
  const key = intlMap[zh];

  return i18n.t.apply(i18n, [key, ...values]);
};

/**
 * tcv
 * @param zh
 * @param values
 */
I18nFactory.tcv = function (zh: Path, ...values: []) {
  const key = intlMap[zh];

  return i18n.tc.apply(i18n, [key, ...values]);
};

/**
 * tev
 * @param zh
 * @param values
 */
I18nFactory.tev = function (zh: Path, ...values: []) {
  const key = intlMap[zh];

  return i18n.te.apply(i18n, [key, ...values]);
};

/**
 * vue-i18n Factory
 * @param config
 */
export default I18nFactory;
