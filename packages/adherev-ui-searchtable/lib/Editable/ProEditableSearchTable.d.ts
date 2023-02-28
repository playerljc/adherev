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
     * ProEditableSearchTable
     * @param serviceName
     * @constructor
     */
    deleteByIndex(index: any): any[];
};
/**
 * ProEditableSearchTable
 * @param serviceName
 * @constructor
 */
export declare const ProEditableSearchTable: (serviceName: string) => any;
