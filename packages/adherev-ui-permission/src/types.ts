import { ExtractPropTypes } from 'vue';

import { permissionProps } from './permission';

export type PermissionProps = Partial<ExtractPropTypes<typeof permissionProps>>;
