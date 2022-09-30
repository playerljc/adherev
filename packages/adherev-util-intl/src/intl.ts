import { I18nOptions, Locale, Path, TranslateResult, createI18n } from 'vue-i18n';

import Intl from '@baifendian/adhere-util-intl';

import en_US from './locales/en_US';
import pt_PT from './locales/pt_PT';
import zh_CN from './locales/zh_CN';

// 组件的国际化文件
const finallyLocales = {
  en_US,
  zh_CN,
  pt_PT,
};

const intlMap = {};

const mainLocales = {};

let i18n: any = null;

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
 * @param app
 */
export function extend(app: any): void {
  // if (!app.config.globalProperties.hasOwnProperty('$i18n')) {
  //   // $FlowFixMe
  //   Object.defineProperty(app.config.globalProperties, '$i18n', {
  //     get() {
  //       return i18n /*this._i18n*/;
  //     },
  //   });
  // }

  app.config.globalProperties.$tv = function (zh: Path, ...values: []): TranslateResult {
    // const i18n = this.$i18n;
    // const key = intlMap[zh];
    return I18nFactory.tv.apply(this, [zh, ...values]); // i18n.t(key, i18n.locale, i18n._getMessages(), this, ...values);
  };

  app.config.globalProperties.$tcv = function (
    zh: Path,
    choice?: number,
    ...values: any
  ): TranslateResult {
    // const i18n = this.$i18n;
    // const key = intlMap[zh];
    // @ts-ignore
    return I18nFactory.tcv.apply(this, [zh, ...values]); // i18n._tc(key, i18n.locale, i18n._getMessages(), this, choice, ...values);
  };

  app.config.globalProperties.$tev = function (zh: Path, locale?: Locale): boolean {
    // const i18n = this.$i18n;
    // const key = intlMap[zh];
    // @ts-ignore
    return I18nFactory.tv.apply(this, [zh, locale]); //i18n._te(key, i18n.locale, i18n._getMessages(), locale);
  };
}

/**
 * I18nFactory
 * @param config
 * @constructor
 */
const I18nFactory = function (config: { I18nOptions: I18nOptions; prefix }) {
  const { I18nOptions, prefix = 'local' } = config;

  const { messages: locales = {}, locale } = I18nOptions;

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
      // @ts-ignore
      Array.from(new Set([...masterLocales[p], ...(slaveLocales[p] || [])])),
    );
  }

  // 反转资源文件
  // @ts-ignore
  initIntlMap(mainLocales.zh_CN);

  // i18n实例
  i18n = createI18n({
    ...I18nOptions,
    ...{ messages: mainLocales },
  });

  // 初始化@baifendian/adhere-util-intl
  Intl.init({
    // @ts-ignore
    currentLocale: locale,
    locales,
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

  return i18n?.global?.t?.apply?.(i18n, [key, ...(values || [])]);
};

/**
 * tcv
 * @param zh
 * @param values
 */
I18nFactory.tcv = function (zh: Path, ...values: []) {
  const key = intlMap[zh];

  return i18n?.global?.tc?.apply?.(i18n, [key, ...(values || [])]);
};

/**
 * tev
 * @param zh
 * @param values
 */
I18nFactory.tev = function (zh: Path, ...values: []) {
  const key = intlMap[zh];

  return i18n?.global?.te?.apply?.(i18n, [key, ...values]);
};

/**
 * vue-i18n Factory
 * @param config
 */
export default I18nFactory;
