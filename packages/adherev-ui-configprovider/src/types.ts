import { ExtractPropTypes } from 'vue';

import { configProviderProps } from './configprovider';

export interface IntlProps {
  lang: 'en_US' | 'zh_CN' | 'pt_PT';
  locales: object;
  prefix: string;
  mainLanguage: string;
}

export type ConfigProviderProps = Partial<ExtractPropTypes<typeof configProviderProps>>;
