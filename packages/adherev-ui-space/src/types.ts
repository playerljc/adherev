import { ExtractPropTypes } from 'vue';

import { spaceGroupProps, spaceProps } from './space';

export type SpaceProps = Partial<ExtractPropTypes<typeof spaceProps>>;
export type SpaceGroupProps = Partial<ExtractPropTypes<typeof spaceGroupProps>>;
