/**
 * assignAttrs
 * @param props
 * @param parentElement
 * @param defaultProps
 */
export declare function assignAttrs(props: any, defaultProps: any, parentElement: any): any;
/**
 * extend
 * @description 实现高阶函数
 * @param Component - Vue组件配置对象
 * @param optionsOverwrite - Vue组件的options
 * @param renderOptions - props,attrs和slots
 */
export declare function HOC(Component: any, renderOptions?: {
    props?: (props: any, getEl?: () => HTMLElement | null) => any;
    attrs?: (attrs: any) => any;
    slots?: (slots: any) => any;
}): (props: any, context: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
