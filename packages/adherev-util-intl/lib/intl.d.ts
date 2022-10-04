import VueI18n from 'vue-i18n';
import { I18nOptions, Path } from 'vue-i18n/types';
interface I18nFactoryFunction {
    (config: {
        I18nOptions: I18nOptions;
        prefix: string;
    }): any;
    tv: (zh: Path, values?: VueI18n.Values) => VueI18n.TranslateResult | undefined;
    v: (zh: Path, values?: VueI18n.Values) => VueI18n.TranslateResult | undefined;
    tcv: (zh: Path, choice?: VueI18n.Choice, values?: VueI18n.Values) => string | undefined;
    tev: (zh: Path, locale?: VueI18n.Locale) => boolean | undefined;
    isUse?: () => void;
    use?: (Vue: any) => void;
    install?: (Vue: any) => void;
    getLocal?: (prefix: string, data: string[]) => object;
}
/**
 * getLocal
 * @param prefix
 * @param data
 * @return object
 */
export declare function getLocal(prefix: string | undefined, data: Array<string>): object;
/**
 * extend
 * @param Vue
 */
export declare function extend(Vue: any): void;
/**
 * I18nFactory
 * @param config
 * @constructor
 */
declare const I18nFactory: I18nFactoryFunction;
/**
 * vue-i18n Factory
 * @param config
 */
export default I18nFactory;
