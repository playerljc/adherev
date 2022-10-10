// import VueI18n from 'vue-i18n';
// import { I18nOptions, IVueI18n, Locale, Path, TranslateResult } from 'vue-i18n/types';
//
// import Intl from '@baifendian/adhere-util-intl';
//
// import en_US from './locales/en_US';
// import pt_PT from './locales/pt_PT';
// import zh_CN from './locales/zh_CN';
//
// // 组件的国际化文件
// const finallyLocales = {
//   en_US,
//   zh_CN,
//   pt_PT,
// };
//
// const intlMap = {};
//
// const mainLocales = {};
//
// let i18n: IVueI18n | null = null;
//
// interface I18nFactoryFunction {
//   (config: { I18nOptions: I18nOptions; prefix: string }): any;
//   tv: (zh: Path, values?: VueI18n.Values) => VueI18n.TranslateResult | undefined;
//   v: (zh: Path, values?: VueI18n.Values) => VueI18n.TranslateResult | undefined;
//   tcv: (zh: Path, choice?: VueI18n.Choice, values?: VueI18n.Values) => string | undefined;
//   tev: (zh: Path, locale?: VueI18n.Locale) => boolean | undefined;
//   isUse?: () => void;
//   use?: (Vue) => void;
//   install?: (Vue) => void;
//   getLocal?: (prefix: string, data: string[]) => object;
// }
//
// /**
//  * initIntlMap - 初始化以中文为key,intl.get()为值的Map
//  * @param zh_CN
//  */
// function initIntlMap(zh_CN) {
//   const propertys = Object.getOwnPropertyNames(zh_CN);
//
//   propertys.forEach((p) => {
//     // 中文key 国际化值为值
//     intlMap[zh_CN[p]] = p;
//   });
// }
//
// /**
//  * getLocal
//  * @param prefix
//  * @param data
//  * @return object
//  */
// export function getLocal(prefix = 'local', data: Array<string>): object {
//   const result = [...Array.from(new Set(data))];
//
//   const local = {};
//
//   for (let i = 0; i < result.length; i++) {
//     local[`${prefix}${i + 1}`] = result[i];
//   }
//
//   return local;
// }
//
// /**
//  * extend
//  * @param Vue
//  */
// export function extend(Vue: any): void {
//   if (!Vue.prototype.hasOwnProperty('$i18n')) {
//     // $FlowFixMe
//     Object.defineProperty(Vue.prototype, '$i18n', {
//       get() {
//         return this._i18n;
//       },
//     });
//   }
//
//   Vue.prototype.$tv = function (zh: Path, ...values: any): TranslateResult {
//     const i18n = this.$i18n;
//     const key = intlMap[zh];
//     return i18n.t(key, i18n.locale, i18n._getMessages(), this, ...values);
//   };
//
//   Vue.prototype.$tcv = function (zh: Path, choice?: number, ...values: any): TranslateResult {
//     const i18n = this.$i18n;
//     const key = intlMap[zh];
//     return i18n._tc(key, i18n.locale, i18n._getMessages(), this, choice, ...values);
//   };
//
//   Vue.prototype.$tev = function (zh: Path, locale?: Locale): boolean {
//     const i18n = this.$i18n;
//     const key = intlMap[zh];
//     return i18n._te(key, i18n.locale, i18n._getMessages(), locale);
//   };
// }
//
// /**
//  * I18nFactory
//  * @param config
//  * @constructor
//  */
// const I18nFactory: I18nFactoryFunction = function (config) {
//   const { I18nOptions, prefix = 'local' } = config;
//
//   const { messages: locales = {}, locale } = I18nOptions;
//
//   const finallyLocalesKeys = Object.keys(finallyLocales);
//   const localesKeys = Object.keys(locales || {});
//
//   let masterLocales;
//   let slaveLocales;
//
//   if (finallyLocalesKeys.length > localesKeys.length) {
//     masterLocales = finallyLocales;
//     slaveLocales = locales || {};
//   } else if (finallyLocalesKeys.length <= localesKeys.length) {
//     masterLocales = locales || {};
//     slaveLocales = finallyLocales;
//   }
//
//   // 整合用户的locales
//   for (const p in masterLocales) {
//     mainLocales[p] = getLocal(
//       prefix,
//       Array.from(new Set([...masterLocales[p], ...(slaveLocales[p] || [])])),
//     );
//   }
//
//   // 反转资源文件
//   // @ts-ignore
//   initIntlMap(mainLocales.zh_CN);
//
//   // i18n实例
//   i18n = new VueI18n({
//     ...I18nOptions,
//     ...{ messages: mainLocales },
//   });
//
//   // 初始化@baifendian/adhere-util-intl
//   Intl.init({
//     // @ts-ignore
//     currentLocale: locale,
//     locales,
//   });
//
//   return i18n;
// };
//
// /**
//  * tv
//  * @param zh
//  * @param values
//  */
// I18nFactory.tv = I18nFactory.v = function (zh: Path, ...values: []) {
//   const key = intlMap[zh];
//
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   return i18n?.t.apply(i18n, [key, ...(values || [])]);
// };
//
// /**
//  * tcv
//  * @param zh
//  * @param values
//  */
// I18nFactory.tcv = function (zh: Path, ...values: []) {
//   const key = intlMap[zh];
//
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   return i18n?.tc.apply(i18n, [key, ...(values || [])]);
// };
//
// /**
//  * tev
//  * @param zh
//  * @param values
//  */
// I18nFactory.tev = function (zh: Path, ...values: []) {
//   const key = intlMap[zh];
//
//   return i18n?.te.apply(i18n, [key, ...values]);
// };
//
// /**
//  * vue-i18n Factory
//  * @param config
//  */
// export default I18nFactory;
import Intl from '@baifendian/adhere-util-intl';

import en_US from './locales/en_US';
import pt_PT from './locales/pt_PT';
import zh_CN from './locales/zh_CN';

/**
 * extend
 * @param Vue
 */
export function extend(Vue: any): void {
  // if (!Vue.prototype.hasOwnProperty('$i18n')) {
  //   // $FlowFixMe
  //   Object.defineProperty(Vue.prototype, '$i18n', {
  //     get() {
  //       return this._i18n;
  //     },
  //   });
  // }

  Vue.prototype.$tv = function (key: string, variables?: object | null): string {
    return IntlV.v(key, variables);
  };

  Vue.prototype.$tvHtml = function (key: string, options?: object | null) {
    return IntlV.vHtml(key, options);
  };
}

const IntlV: any = Intl;

const init = IntlV.init;

IntlV.init = function (..._params) {
  let params = _params;

  if (!!params.length) {
    if ('locales' in params[0] && typeof params[0] === 'object') {
      params[0].locales = {
        en_US: [
          ...Array.from(new Set<string>([...(en_US || []), ...(params[0]?.locales?.en_US || [])])),
        ],
        zh_CN: [
          ...Array.from(new Set<string>([...(zh_CN || []), ...(params[0]?.locales?.zh_CN || [])])),
        ],
        pt_PT: [
          ...Array.from(new Set<string>([...(pt_PT || []), ...(params[0]?.locales?.pt_PT || [])])),
        ],
      };
    } else {
      params[0].locales = {
        en_US,
        zh_CN,
        pt_PT,
      };
    }
  } else {
    params = [
      {
        prefix: 'local',
        currentLocale: 'zh_CN',
        locales: {
          en_US,
          zh_CN,
          pt_PT,
        },
      },
      false,
    ];
  }

  return init.apply(this, params);
};

IntlV.tv = function (..._params) {
  return IntlV.v.apply(this, _params);
};

IntlV.tvHtml = function (..._params) {
  return IntlV.vHtml.apply(this, _params);
};

export default IntlV;
