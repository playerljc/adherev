import MemoManager from '../Extension/SearchAndPaginParams/memo';
import ProTableFactory from '../ProTableFactory';
import SearchDragSortEditableTable from './SearchDragSortEditableTable';

/**
 * TableImplementSearchAndvPaginParamsMemo
 * @type {Memo}
 */
export const TableImplementSearchAndvPaginParamsMemo = MemoManager.create();

/**
 * ProDragSortEditableRowSearchTable
 * @param serviceName
 * @constructor
 */
export const ProDragSortEditableSearchTable: (serviceName: string) => any = (serviceName) =>
  ProTableFactory(
    { className: 'ProDragSortEditableSearchTable', superClass: SearchDragSortEditableTable(serviceName) },
    TableImplementSearchAndvPaginParamsMemo,
  );
