import { ComponentOptions } from 'vue';
import { DefineComponent } from '@vue/runtime-core';
/**
 * ExtendFunction
 */
interface ExtendFunction<P> extends ComponentOptions<any> {
    className?: string | string[];
}
/**
 * withInstall
 * @param comp
 */
export declare const withInstall: (comp: any) => any;
/**
 * withVue
 * @description - 将属性p混入到Vue实例中，在Vue实例的表达式中可以使用this.$adv[p]来进行访问
 * @param app
 * @param p
 * @param val
 */
export declare const withVue: (app: any, p: string, val: any) => void;
/**
 * extend
 * @description - 实现Vue的继承使得可以实现调用父类的方法
 * 例如 类名A有一个renderInner方法，则父类的方法是$renderInnerA
 * @param options
 * @return Omit<ExtendFunction<any>, 'className'>
 */
export declare const extend: (options: ExtendFunction<any>) => Omit<ExtendFunction<any>, 'className'>;
/**
 * HOC
 * @description 实现高阶函数
 * @param Component - Vue组件配置对象
 * @param optionsOverwrite - Vue组件的options
 * @param renderOptions - props,attrs和slots
 */
export declare function HOC(Component: any, optionsOverwrite: any, renderOptions: {
    props?: (props: any) => any;
    attrs?: (attrs: any) => any;
    slots?: (slots: any) => any;
}): DefineComponent<unknown, object, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<unknown>, {}>;
/**
 * getComponentPropsOption
 * @description 获取组件的Props定义
 * @param Component
 * @returns {{}}
 */
export declare const getComponentPropsOption: (Component: any) => any;
/**
 * forwardRef
 * @param comp
 * @param ref
 */
export declare function forwardRef(comp: ComponentOptions, ref: string): ComponentOptions;
export {};
