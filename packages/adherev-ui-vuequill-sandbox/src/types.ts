import { ExtractPropTypes } from 'vue';

import { propsDefine } from './vueQuillSandbox';

export type VueQuillSandboxProps = Partial<ExtractPropTypes<typeof propsDefine>>;
