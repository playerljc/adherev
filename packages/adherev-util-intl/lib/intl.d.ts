import VueI18n from 'vue-i18n';
import { I18nOptions } from 'vue-i18n/types';
/**
 * getLocal
 * @param data
 */
export declare function getLocal(data: Array<string>): object;
/**
 * extend
 * @param Vue
 */
export declare function extend(Vue: any): void;
/**
 * vue-i18n Factory
 * @param config
 */
export default function (config?: I18nOptions): VueI18n;
