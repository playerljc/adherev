import faker from 'faker';

const data = [];
data.length = 300;
data.fill(0);

export default {
  fetchList: {
    resCode: 0,
    data: {
      total: data.length,
      records: data.map((t, index) => ({
        id: faker.random.uuid(),
        name: faker.internet.userName(),
        sex: `${(index + 1) % 2}`,
        birthday: faker.time.recent(),
        deptName: faker.company.companyName(),
        height: faker.random.number(),
        width: faker.random.number(),
        homeTown: faker.address.city(),
        address: faker.address.streetAddress(),
      })),
    },
    message: '',
  },
  fetchDel: {
    resCode: 0,
    data: true,
    resMsg: '',
  },
  fetchSave: {
    resCode: 0,
    data: true,
    resMsg: '',
  },
  fetchUpdate: {
    resCode: 0,
    data: true,
    resMsg: '',
  },
  fetchInfo: {
    resCode: 0,
    data: {
      id: faker.random.uuid(),
      name: faker.internet.userName(),
      sex: '0',
      birthDay: faker.time.recent(),
      deptName: faker.company.companyName(),
      height: faker.random.number(),
      width: faker.random.number(),
      hometown: faker.address.city(),
      address: faker.address.streetAddress(),
      hobby: [1, 2, 3],
      department: '0-0-0',
      annex: [
        {
          path: faker.random.uuid(),
          id: faker.random.uuid(),
          name: faker.company.companyName(),
        },
        {
          path: faker.random.uuid(),
          id: faker.random.uuid(),
          name: faker.company.companyName(),
        },
        {
          path: faker.random.uuid(),
          id: faker.random.uuid(),
          name: faker.company.companyName(),
        },
        {
          path: faker.random.uuid(),
          id: faker.random.uuid(),
          name: faker.company.companyName(),
        },
        {
          path: faker.random.uuid(),
          id: faker.random.uuid(),
          name: faker.company.companyName(),
        },
        {
          path: faker.random.uuid(),
          id: faker.random.uuid(),
          name: faker.company.companyName(),
        },
      ],
    },
    resMsg: '',
  },
};
