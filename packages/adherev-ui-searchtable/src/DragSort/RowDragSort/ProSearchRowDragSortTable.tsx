import MemoManager from '../../Extension/SearchAndPaginParams/memo';
import ProTableFactory from '../../ProTableFactory';
import SearchRowDragSortTable from './SearchRowDragSortTable';

/**
 * TableImplementSearchAndvPaginParamsMemo
 * @type {Memo}
 */
export const TableImplementSearchAndvPaginParamsMemo = MemoManager.create();

/**
 * ProEditableCellSearchTable
 * @param serviceName
 * @constructor
 */
export const ProSearchRowDragSortTable = (serviceName) =>
  ProTableFactory(
    { className: 'ProSearchRowDragSortTable', superClass: SearchRowDragSortTable(serviceName) },
    TableImplementSearchAndvPaginParamsMemo,
  );
