/**
 * TableRow
 * @description 表格行组件
 */
export default {
    inject: ['getContext'],
    data() {
        return {
            $map: new Map([
                ['useEditableRow', null],
                ['useEditableTableRow', null],
                ['useRowDragSortRow', null],
            ]),
        };
    },
    computed: {
        props() {
            return this.getContext?.()?.context?.onRow?.(this.$parent.rowKey);
        },
    },
    render(h) {
        // 所有的reducer都去装饰tr，最终返回装饰后的tr
        const trREL = <tr>{this.$slots.default}</tr>;
        return this.getContext?.()
            ?.context?.getTableRowComponentReducers()
            ?.reduce?.((pre, hookName) => {
            pre.value = this.$data.$map.get(hookName)?.({
                h,
                rowIndex,
                record,
                rowKey,
                columns,
                rowConfig,
                value: pre.value,
                //pre.value
            });
            return pre;
        }, {
            value: trREL,
        }).value;
    },
};
//# sourceMappingURL=TableRow.jsx.map