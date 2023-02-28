import MemoManager from './Extension/SearchAndPaginParams/memo';
import ProTableFactory from './ProTableFactory';
import SearchTableImplement from './SearchTableImplement';

/**
 * TableImplementSearchAndvPaginParamsMemo
 * @type {Memo}
 */
export const TableImplementSearchAndvPaginParamsMemo = MemoManager.create();

/**
 * ProSearchTable
 * @param serviceName
 * @constructor
 */
export const ProSearchTable: (serviceName: string) => any = (serviceName) =>
  ProTableFactory(
    { className: 'ProSearchTable', superClass: SearchTableImplement(serviceName) },
    TableImplementSearchAndvPaginParamsMemo,
  );
