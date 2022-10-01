/**
 * withInstall
 * @param comp
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
 * Fragment
 */
export declare const Fragment: {
    render(h: any): any;
};
