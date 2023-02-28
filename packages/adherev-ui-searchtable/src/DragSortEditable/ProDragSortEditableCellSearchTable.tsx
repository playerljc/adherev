import MemoManager from '../Extension/SearchAndPaginParams/memo';
import ProTableFactory from '../ProTableFactory';
import SearchDragSortEditableCellTable from './SearchDragSortEditableCellTable';

/**
 * TableImplementSearchAndvPaginParamsMemo
 * @type {Memo}
 */
export const TableImplementSearchAndvPaginParamsMemo = MemoManager.create();

/**
 * ProDragSortEditableCellSearchTable
 * @param serviceName
 * @constructor
 */
export const ProDragSortEditableCellSearchTable: (serviceName: string) => any = (serviceName) =>
  ProTableFactory(
    { className: 'ProDragSortEditableCellSearchTable', superClass: SearchDragSortEditableCellTable(serviceName) },
    TableImplementSearchAndvPaginParamsMemo,
  );
