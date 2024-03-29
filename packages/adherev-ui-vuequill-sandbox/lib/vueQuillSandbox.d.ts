import type { DeltaStatic, Sources, StringMap } from 'quill';
import type { Range, UnprivilegedEditor, Value } from 'react-quill';
import { PropType } from 'vue';
export declare const propsDefine: {
    wrapClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    wrapStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: any;
    };
    quillStyle: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    bounds: import("vue-types").VueTypeDef<string | HTMLElement>;
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    defaultValue: {
        type: PropType<Value>;
    };
    formats: import("vue-types").VueTypeValidableDef<string[]> & {
        default: () => string[];
    };
    id: import("vue-types").VueTypeValidableDef<string>;
    modules: import("vue-types").VueTypeValidableDef<StringMap>;
    placeholder: import("vue-types").VueTypeValidableDef<string>;
    preserveWhitespace: import("vue-types").VueTypeValidableDef<boolean>;
    readOnly: import("vue-types").VueTypeValidableDef<boolean>;
    scrollingContainer: import("vue-types").VueTypeDef<string | number>;
    style: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: any;
    };
    tabIndex: import("vue-types").VueTypeValidableDef<number>;
    theme: import("vue-types").VueTypeValidableDef<string>;
    value: {
        type: PropType<Value>;
    };
    onChange: import("vue-types").VueTypeValidableDef<(value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor) => void>;
    onChangeSelection: import("vue-types").VueTypeValidableDef<(selection: Range, source: Sources, editor: UnprivilegedEditor) => void>;
    onFocus: import("vue-types").VueTypeValidableDef<(selection: Range, source: Sources, editor: UnprivilegedEditor) => void>;
    onBlur: import("vue-types").VueTypeValidableDef<(previousSelection: Range, source: Sources, editor: UnprivilegedEditor) => void>;
    onKeyDown: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
    onKeyPress: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
    onKeyUp: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
};
declare const VueQuillSandbox: import("vue").DefineComponent<{
    wrapClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    wrapStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: any;
    };
    quillStyle: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    bounds: import("vue-types").VueTypeDef<string | HTMLElement>;
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    defaultValue: {
        type: PropType<Value>;
    };
    formats: import("vue-types").VueTypeValidableDef<string[]> & {
        default: () => string[];
    };
    id: import("vue-types").VueTypeValidableDef<string>;
    modules: import("vue-types").VueTypeValidableDef<StringMap>;
    placeholder: import("vue-types").VueTypeValidableDef<string>;
    preserveWhitespace: import("vue-types").VueTypeValidableDef<boolean>;
    readOnly: import("vue-types").VueTypeValidableDef<boolean>;
    scrollingContainer: import("vue-types").VueTypeDef<string | number>;
    style: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: any;
    };
    tabIndex: import("vue-types").VueTypeValidableDef<number>;
    theme: import("vue-types").VueTypeValidableDef<string>;
    value: {
        type: PropType<Value>;
    };
    onChange: import("vue-types").VueTypeValidableDef<(value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor) => void>;
    onChangeSelection: import("vue-types").VueTypeValidableDef<(selection: Range, source: Sources, editor: UnprivilegedEditor) => void>;
    onFocus: import("vue-types").VueTypeValidableDef<(selection: Range, source: Sources, editor: UnprivilegedEditor) => void>;
    onBlur: import("vue-types").VueTypeValidableDef<(previousSelection: Range, source: Sources, editor: UnprivilegedEditor) => void>;
    onKeyDown: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
    onKeyPress: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
    onKeyUp: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    wrapClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    wrapStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: any;
    };
    quillStyle: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    bounds: import("vue-types").VueTypeDef<string | HTMLElement>;
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    defaultValue: {
        type: PropType<Value>;
    };
    formats: import("vue-types").VueTypeValidableDef<string[]> & {
        default: () => string[];
    };
    id: import("vue-types").VueTypeValidableDef<string>;
    modules: import("vue-types").VueTypeValidableDef<StringMap>;
    placeholder: import("vue-types").VueTypeValidableDef<string>;
    preserveWhitespace: import("vue-types").VueTypeValidableDef<boolean>;
    readOnly: import("vue-types").VueTypeValidableDef<boolean>;
    scrollingContainer: import("vue-types").VueTypeDef<string | number>;
    style: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: any;
    };
    tabIndex: import("vue-types").VueTypeValidableDef<number>;
    theme: import("vue-types").VueTypeValidableDef<string>;
    value: {
        type: PropType<Value>;
    };
    onChange: import("vue-types").VueTypeValidableDef<(value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor) => void>;
    onChangeSelection: import("vue-types").VueTypeValidableDef<(selection: Range, source: Sources, editor: UnprivilegedEditor) => void>;
    onFocus: import("vue-types").VueTypeValidableDef<(selection: Range, source: Sources, editor: UnprivilegedEditor) => void>;
    onBlur: import("vue-types").VueTypeValidableDef<(previousSelection: Range, source: Sources, editor: UnprivilegedEditor) => void>;
    onKeyDown: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
    onKeyPress: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
    onKeyUp: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
}>>, {
    wrapClassName: string;
    wrapStyle: CSSProperties;
    quillStyle: string;
    className: string;
    formats: string[];
    style: CSSProperties;
}>;
export default VueQuillSandbox;
