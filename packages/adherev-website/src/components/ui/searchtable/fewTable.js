import { oneFew } from './mock';
import Table from './table';
import { Ajax } from '@baifendian/adherev';

const request = new Ajax('');

export default {
  mixins: [Table],
  methods: {
    fetchDataExecute(searchParams) {
      this.loading = true;

      return request
        .get({
          mock: true,
          path: oneFew,
        })
        .then((result) => {
          this.dataSource = {
            total: result.total,
            list: result.list,
          };

          this.loading = false;
        });
    },
  },
};
