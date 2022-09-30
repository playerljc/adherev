import { Util } from '@baifendian/adherev';
import faker from 'faker';

const data = [];
data.length = 100;
data.fill(0);

export const oneFew = {
  total: 1,
  list: [
    {
      id: faker.random.uuid(),
      name: faker.internet.userName(),
      sex: `${Util.generatorRandom(0, 1)}`,
      homeTown: faker.address.city(),
      birthday: new Date().getTime(),
      deptName: faker.company.companyName(),
      height: faker.random.number(),
      width: faker.random.number(),
    },
  ],
};

export default {
  total: data.length,
  list: data.map(() => ({
    id: faker.random.uuid(),
    name: faker.internet.userName(),
    sex: `${Util.generatorRandom(0, 1)}`,
    homeTown: faker.address.city(),
    birthday: new Date().getTime(),
    deptName: faker.company.companyName(),
    height: faker.random.number(),
    width: faker.random.number(),
  })),
};
