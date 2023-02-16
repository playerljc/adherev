import Util from '@baifendian/adherev-util';
import SearchTable from '../../../index';
const { ProSearchTable, SearchAndPaginParams } = SearchTable

const {
  _util: { extend },
} = Util

/**
 * TableImplementSearchAndvPaginParamsMemo
 */
export const TableImplementSearchAndvPaginParamsMemo = SearchAndPaginParams.MemoManager.create()

/**
 * SystemBaseSearchTableImpl
 * @param serviceName
 * @constructor
 */
export const SystemBaseSearchTableImpl: (serviceName:string) => any = serviceName =>
  extend({
    className: 'SystemBaseSearchTableImpl',
    mixins: [ProSearchTable(serviceName)],
  })
