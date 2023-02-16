import MemoManager from '../Extension/SearchAndPaginParams/memo';
import ProTableFactory from '../ProTableFactory';
import SearchEditableTable from './SearchEditableTable';

/**
 * TableImplementSearchAndvPaginParamsMemo
 * @type {Memo}
 */
export const TableImplementSearchAndvPaginParamsMemo = MemoManager.create();

/**
 * ProEditableSearchTable
 * @param serviceName
 * @constructor
 */
export const ProEditableSearchTable:(serviceName: string) => any = (serviceName) =>
  ProTableFactory(
    { className: 'ProEditableSearchTable', superClass: SearchEditableTable(serviceName) },
    TableImplementSearchAndvPaginParamsMemo,
  );
