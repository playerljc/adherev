import type { CreateElement } from 'vue';
import { ComponentOptions } from 'vue/types/options';
/**
 * ExtendFunction
 */
interface ExtendFunction<P> extends ComponentOptions<any> {
    className?: string | string[];
}
/**
 * withInstall
 * @description Vue组件的插件方法
 * @param comp
 * @return comp
 */
export declare const withInstall: (comp: any) => any;
/**
 * withVue
 * @description - 将属性p混入到Vue实例中，在Vue实例的表达式中可以使用this.$adv[p]来进行访问
 * @param Vue
 * @param p
 * @param val
 */
export declare const withVue: (Vue: any, p: string, val: any) => void;
/**
 * extend
 * @description - 实现Vue的继承使得可以实现调用父类的方法
 * 例如 类名A有一个renderInner方法，则父类的方法是$renderInnerA
 * @param options
 * @return Omit<ExtendFunction<any>, 'className'>
 */
export declare const extend: (options: ExtendFunction<any>) => Omit<ExtendFunction<any>, 'className'>;
/**
 * Fragment
 */
export declare const Fragment: {
    render(h: any): any;
};
/**
 * HOCFunctional
 * @description 函数组件实现HOC
 * @param options
 * @param data
 * @param name
 * @constructor
 */
export declare const HOCFunctional: (options: object, data: Function, name: string) => {
    functional: boolean;
    name: string;
    render(h: any, context: any): any;
};
/**
 * HOC
 * @description 非函数组件实现HOC
 * @description HOC是对已有组件的一个扩展，扩展的原则就是render函数中还是用已有组件进行渲染，只是对已有组件的属性和传值进行了扩展而已
 * @param component - 组件配置
 * @param options - 重写的配置项
 * @param dataOptions - 数据对象
 * @param children
 * @constructor
 */
export declare const HOC: (component: {
    [props: string]: any;
}, options: Function | object | null, dataOptions: {
    renderWith: (h: CreateElement, baseRenderOptions?: any) => any;
    options?: {
        deep: boolean;
    } | undefined;
}, children?: Function | undefined) => any;
/**
 * getComponentPropsOption
 * @description 获取组件的Props定义
 * @param Component
 * @returns {{}}
 */
export declare const getComponentPropsOption: any;
export {};
