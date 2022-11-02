/**
 * ConfigProviderProps
 * @interface ConfigProviderProps
 */
export interface ConfigProviderProps {
    intl: IntlProps;
}
export interface IntlProps {
    lang: 'en_US' | 'zh_CN' | 'pt_PT';
    locales: object;
    prefix: string;
    mainLanguage: string;
}
export interface ConfigProviderContext {
}
