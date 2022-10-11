import { PropType } from 'vue';
import { IColumnSetting } from '../../types';
declare const _default: {
    name: string;
    props: {
        columns: {
            type: PropType<IColumnSetting[]>;
            default: () => never[];
        };
    };
    emits: string[];
    inject: string[];
    render(h: any): any;
};
export default _default;
