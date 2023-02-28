/**
 * ProTableFactory
 * @description 创建ProTable的工厂
 * @param className
 * @param superClass
 * @param searchAndPaginParamsMemo
 */
declare const ProTableFactory: (config: {
    className: string;
    superClass: any;
}, searchAndPaginParamsMemo: any) => any;
export default ProTableFactory;
