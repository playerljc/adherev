import MemoManager from '../Extension/SearchAndPaginParams/memo';
import ProTableFactory from '../ProTableFactory';
import SearchEditableRowTable from './SearchEditableRowTable';

/**
 * TableImplementSearchAndvPaginParamsMemo
 * @type {Memo}
 */
export const TableImplementSearchAndvPaginParamsMemo = MemoManager.create();

/**
 * ProEditableRowSearchTable
 * @param serviceName
 * @constructor
 */
export const ProEditableRowSearchTable = (serviceName) =>
  ProTableFactory(
    { className: 'ProEditableRowSearchTable', superClass: SearchEditableRowTable(serviceName) },
    TableImplementSearchAndvPaginParamsMemo,
  );
