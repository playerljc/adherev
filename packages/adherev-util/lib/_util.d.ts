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
export {};
