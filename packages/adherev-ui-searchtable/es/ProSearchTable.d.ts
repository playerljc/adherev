/**
 * TableImplementSearchAndvPaginParamsMemo
 * @type {Memo}
 */
export declare const TableImplementSearchAndvPaginParamsMemo: {
    memo: any[];
    isEmpty(): boolean;
    add(path: any, components: any): void;
    findByPath(path: any): any;
    findIndexByPath(path: any): number; /**
     * ProSearchTable
     * @param serviceName
     * @constructor
     */
    deleteByIndex(index: any): any[];
};
/**
 * ProSearchTable
 * @param serviceName
 * @constructor
 */
export declare const ProSearchTable: (serviceName: string) => any;
