import { TableDensity } from '../../types';
declare const _default: import("vue").DefineComponent<{
    density: {
        type: StringConstructor;
        default: TableDensity;
    };
}, unknown, unknown, {}, {
    onReset(): void;
    onChange(density: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("reset" | "change")[], "reset" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    density: {
        type: StringConstructor;
        default: TableDensity;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onReset?: ((...args: any[]) => any) | undefined;
}, {
    density: string;
}>;
export default _default;
