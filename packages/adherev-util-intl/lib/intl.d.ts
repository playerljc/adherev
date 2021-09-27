import VueI18n from 'vue-i18n';
import { I18nOptions, Path, IVueI18n } from 'vue-i18n/types';
/**
 * getLocal
 * @param data
 * @return object
 */
export declare function getLocal(data: Array<string>): object;
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
declare const I18nFactory: {
    (config?: I18nOptions): IVueI18n;
    /**
     * tv
     * @param zh
     * @param values
     */
    tv: (zh: Path) => VueI18n.TranslateResult;
    v(zh: Path): VueI18n.TranslateResult;
    /**
     * tcv
     * @param zh
     * @param values
     */
    tcv(zh: Path): string;
    /**
     * tev
     * @param zh
     * @param values
     */
    tev(zh: Path): boolean;
};
/**
 * vue-i18n Factory
 * @param config
 */
export default I18nFactory;
