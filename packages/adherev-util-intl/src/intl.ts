// @ts-ignore
import VueI18n from 'vue-i18n';
import { I18nOptions, Path, TranslateResult, Locale } from 'vue-i18n/types';

// k007组件的国际化文件
const finallyLocales = {
  en_US: require('./locales/en_US').default,
  zh_CN: require('./locales/zh_CN').default,
  pt_PT: require('./locales/pt_PT').default,
};

const intlMap = {};

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
 */
export function getLocal(data: Array<string>): object {
  // @ts-ignore
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
 * vue-i18n Factory
 * @param config
 */
export default function (config: I18nOptions = {}) {
  const { messages = {} } = config;

  // 整合用户的locales
  for (const lang in messages || {}) {
    if (lang in finallyLocales) {
      finallyLocales[lang] = Object.assign(finallyLocales[lang], (messages || {})[lang]);
    }
  }

  initIntlMap(finallyLocales.zh_CN);

  return new VueI18n({
    ...config,
    ...{ messages: finallyLocales },
  });
}
