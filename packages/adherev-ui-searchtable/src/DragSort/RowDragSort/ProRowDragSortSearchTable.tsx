import MemoManager from '../../Extension/SearchAndPaginParams/memo';
import ProTableFactory from '../../ProTableFactory';
import SearchRowDragSortTable from './SearchRowDragSortTable';

/**
 * TableImplementSearchAndvPaginParamsMemo
 * @type {Memo}
 */
export const TableImplementSearchAndvPaginParamsMemo = MemoManager.create();

/**
 * ProRowDragSortSearchTable
 * @param serviceName
 * @constructor
 */
export const ProRowDragSortSearchTable: (serviceName: string) => any = (serviceName) =>
  ProTableFactory(
    { className: 'ProRowDragSortSearchTable', superClass: SearchRowDragSortTable(serviceName) },
    TableImplementSearchAndvPaginParamsMemo,
  );
