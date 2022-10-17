import { ComponentOptions } from 'vue';
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
 * @param VueComponent
 * @param overwrite
 */
export declare const HOC: (VueComponent: object, overwrite?: any) => object;
export {};
