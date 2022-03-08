import { I18nOptions, Path } from 'vue-i18n';
/**
 * getLocal
 * @param prefix
 * @param data
 * @return object
 */
export declare function getLocal(prefix: string | undefined, data: Array<string>): object;
/**
 * extend
 * @param app
 */
export declare function extend(app: any): void;
/**
 * I18nFactory
 * @param config
 * @constructor
 */
declare const I18nFactory: {
    (config: {
        I18nOptions: I18nOptions;
        prefix: any;
    }): any;
    /**
     * tv
     * @param zh
     * @param values
     */
    tv: (zh: Path) => any;
    v(zh: Path): any;
    /**
     * tcv
     * @param zh
     * @param values
     */
    tcv(zh: Path): any;
    /**
     * tev
     * @param zh
     * @param values
     */
    tev(zh: Path): any;
};
/**
 * vue-i18n Factory
 * @param config
 */
export default I18nFactory;
