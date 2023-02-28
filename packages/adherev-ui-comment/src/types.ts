import type { ExtractPropTypes } from 'vue';

import { commentProps } from './Comment';
import { listProps } from './Comment/List';
import { listStandardProps } from './Comment/ListStandard';
import { submitProps } from './Reply/Submit';

export type Local =
  | 'ar'
  | 'de'
  | 'en'
  | 'es'
  | 'fa'
  | 'fr'
  | 'it'
  | 'ja'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ru'
  | 'uk'
  | 'zh'
  | string;

export type CommentProps = Partial<ExtractPropTypes<typeof commentProps>>;
export type ListStandardProps = Partial<ExtractPropTypes<typeof listStandardProps>>;
export type ListProps = Partial<ExtractPropTypes<typeof listProps>>;
export type SubmitProps = Partial<ExtractPropTypes<typeof submitProps>>;
