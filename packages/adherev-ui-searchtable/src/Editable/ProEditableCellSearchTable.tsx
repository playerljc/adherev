import MemoManager from '../Extension/SearchAndPaginParams/memo';
import ProTableFactory from '../ProTableFactory';
import SearchEditableCellTable from './SearchEditableCellTable';

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
export const ProEditableCellSearchTable:(serviceName: string) => any = (serviceName) =>
  ProTableFactory(
    { className: 'ProEditableCellSearchTable', superClass: SearchEditableCellTable(serviceName) },
    TableImplementSearchAndvPaginParamsMemo,
  );
