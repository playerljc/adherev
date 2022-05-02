import Table from './table';
import { oneFew } from './mock';
import { Ajax } from '@baifendian/adherev';
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
//# sourceMappingURL=fewTable.jsx.map