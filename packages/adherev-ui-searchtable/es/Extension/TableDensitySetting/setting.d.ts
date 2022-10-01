import { CreateElement } from 'vue';
import { TableDensity } from '../../types';
declare const _default: {
    props: {
        density: {
            type: StringConstructor;
            default: TableDensity;
        };
    };
    data(): {
        $config: {
            label: string | import("vue-i18n").default.LocaleMessages | undefined;
            value: TableDensity;
        }[];
    };
    render(h: CreateElement): any;
};
export default _default;
