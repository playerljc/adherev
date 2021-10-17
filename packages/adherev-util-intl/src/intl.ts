import VueI18n from 'vue-i18n';
import { I18nOptions, Path, TranslateResult, Locale, IVueI18n } from 'vue-i18n/types';
import en_US from './locales/en_US';
import zh_CN from './locales/zh_CN';
import pt_PT from './locales/pt_PT';

// 组件的国际化文件
const finallyLocales = {
  en_US,
  zh_CN,
  pt_PT,
};

const intlMap = {};

const mainLocales = {};

let i18n: IVueI18n | null = null;

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
 * @param prefix
 * @param data
 * @return object
 */
export function getLocal(prefix = 'local', data: Array<string>): object {
  const result = [...Array.from(new Set(data))];

  const local = {};

  for (let i = 0; i < result.length; i++) {
    local[`${prefix}${i + 1}`] = result[i];
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
const I18nFactory = function (config: { I18nOptions: I18nOptions; prefix }) {
  const { I18nOptions, prefix = 'local' } = config;

  const { messages: locales = {} } = I18nOptions;

  const finallyLocalesKeys = Object.keys(finallyLocales);
  const localesKeys = Object.keys(locales || {});

  let masterLocales;
  let slaveLocales;

  if (finallyLocalesKeys.length > localesKeys.length) {
    masterLocales = finallyLocales;
    slaveLocales = locales || {};
  } else if (finallyLocalesKeys.length <= localesKeys.length) {
    masterLocales = locales || {};
    slaveLocales = finallyLocales;
  }

  // 整合用户的locales
  for (const p in masterLocales) {
    mainLocales[p] = getLocal(
      prefix,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      Array.from(new Set([...masterLocales[p], ...(slaveLocales[p] || [])])),
    );
  }

  console.log('mainLocales', mainLocales);

  // 反转资源文件
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  initIntlMap(mainLocales.zh_CN);

  // i18n实例
  i18n = new VueI18n({
    ...I18nOptions,
    ...{ messages: mainLocales },
  });

  return i18n;
};

/**
 * tv
 * @param zh
 * @param values
 */
I18nFactory.tv = I18nFactory.v = function (zh: Path, ...values: []) {
  const key = intlMap[zh];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return i18n?.t.apply(i18n, [key, ...(values || [])]);
};

/**
 * tcv
 * @param zh
 * @param values
 */
I18nFactory.tcv = function (zh: Path, ...values: []) {
  const key = intlMap[zh];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return i18n?.tc.apply(i18n, [key, ...(values || [])]);
};

/**
 * tev
 * @param zh
 * @param values
 */
I18nFactory.tev = function (zh: Path, ...values: []) {
  const key = intlMap[zh];

  return i18n?.te.apply(i18n, [key, ...values]);
};

/**
 * vue-i18n Factory
 * @param config
 */
export default I18nFactory;
