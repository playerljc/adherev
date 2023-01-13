import userMock from '../mock/user';
import request from '../util/request';

export const fetchList = (() => ({
  call: () => {
    return request
      .get({
        path: userMock.fetchList,
        mock: true,
        loading: {
          show: false,
        },
      })
      .then((res) => {
        return res;
      });
  },
  defaultResult: () => ({
    total: 0,
    records: [],
  }),
}))();

export const fetchDel = (() => ({
  call: (id, loading) =>
    request.get({
      path: userMock.fetchDel,
      mock: true,
      loading: {
        show: loading,
      },
    }),
  defaultResult: () => true,
}))();

export const fetchInfo = (() => ({
  call: (id, loading) =>
    request.get({
      path: userMock.fetchInfo,
      mock: true,
      loading: {
        show: loading,
      },
    }),
  defaultResult: () => ({
    id: '',
    name: '',
    sex: '',
    birthDay: '',
    height: '',
    width: '',
    hometown: '',
    address: '',
    hobby: null,
    annex: [],
  }),
}))();

export const fetchSave = (() => ({
  call: (params, loading) =>
    request.post({
      path: userMock.fetchSave,
      mock: true,
      loading: {
        show: loading,
      },
    }),
  defaultResult: () => true,
}))();

export const fetchUpdate = (() => ({
  call: (params, loading) =>
    request.post({
      path: userMock.fetchUpdate,
      mock: true,
      loading: {
        show: loading,
      },
    }),
  defaultResult: () => true,
}))();

export default {
  codeKey: 'resCode',
  codeSuccessKey: 0,
  dataKey: 'data',
  messageKey: 'resMsg',
};
