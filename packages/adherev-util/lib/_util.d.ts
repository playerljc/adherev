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
 * HOC
 * @param VueComponent
 * @param overwrite
 */
export declare const HOC: (VueComponent: object, overwrite?: any) => object;
