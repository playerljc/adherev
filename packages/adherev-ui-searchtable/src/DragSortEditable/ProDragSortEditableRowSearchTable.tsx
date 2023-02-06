import MemoManager from '../Extension/SearchAndPaginParams/memo';
import ProTableFactory from '../ProTableFactory';
import SearchDragSortEditableRowTable from './SearchDragSortEditableRowTable';

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
export const ProDragSortEditableRowSearchTable = (serviceName) =>
  ProTableFactory(
    { className: 'ProDragSortEditableRowSearchTable', superClass: SearchDragSortEditableRowTable(serviceName) },
    TableImplementSearchAndvPaginParamsMemo,
  );
