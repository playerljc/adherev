import VueI18n from 'vue-i18n';
import { Path, IVueI18n } from 'vue-i18n/types';
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
declare const I18nFactory: {
    (config: {
        I18nOptions: VueI18n.I18nOptions;
        prefix: any;
    }): IVueI18n;
    /**
     * tv
     * @param zh
     * @param values
     */
    tv: (zh: Path) => string | VueI18n.LocaleMessages | undefined;
    v(zh: Path): string | VueI18n.LocaleMessages | undefined;
    /**
     * tcv
     * @param zh
     * @param values
     */
    tcv(zh: Path): string | undefined;
    /**
     * tev
     * @param zh
     * @param values
     */
    tev(zh: Path): boolean | undefined;
};
/**
 * vue-i18n Factory
 * @param config
 */
export default I18nFactory;
