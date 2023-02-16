/**
 * TableImplementSearchAndvPaginParamsMemo
 * @type {Memo}
 */
export declare const TableImplementSearchAndvPaginParamsMemo: {
    memo: any[];
    isEmpty(): boolean;
    add(path: any, components: any): void;
    findByPath(path: any): any;
    findIndexByPath(path: any): number;
    deleteByIndex(index: any): any[];
};
/**
 * ProEditableCellSearchTable
 * @param serviceName
 * @constructor
 */
export declare const ProEditableCellSearchTable: (serviceName: string) => any;
