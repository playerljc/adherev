import { Ajax } from '@baifendian/adherev';

import { oneFew } from './mock';
import Table from './table';

// @ts-ignore
const request = new Ajax('');

export default {
  mixins: [Table],
  methods: {
    fetchDataExecute(searchParams) {
      this.loading = true;

      return request
        .get({
          mock: true,
          // @ts-ignore
          path: oneFew,
        })
        .then((result: any) => {
          this.dataSource = {
            total: result.total,
            list: result.list,
          };

          this.loading = false;
        });
    },
  },
};
