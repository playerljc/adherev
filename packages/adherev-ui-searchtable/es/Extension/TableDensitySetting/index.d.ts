import { TableDensity } from '../../types';
declare const _default: {
    name: string;
    props: {
        density: {
            type: StringConstructor;
            default: TableDensity;
        };
    };
    emits: string[];
    inject: string[];
    methods: {
        onReset(): void;
        onChange(density: any): void;
    };
    render(h: any): JSX.Element;
};
export default _default;
