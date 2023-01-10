import Split from '@baifendian/adherev-ui-split';
const selectorPrefix = `adherev-ui-searchtable-optionswrap`;
export default {
    name: selectorPrefix,
    render(h) {
        const children = this.$slots.default;
        let result;
        if (children.length <= 1) {
            result = children;
        }
        else {
            const filter = children.filter((t) => {
                if (t?.tag?.indexOf('adv-conditionalrender') !== -1) {
                    if (t?.componentOptions?.propsData?.conditional)
                        return true;
                    return !!t?.componentOptions?.children?.find((c) => c?.data?.slot === 'noMatch');
                }
                return true;
            });
            if (filter.length <= 1) {
                result = children;
            }
            else {
                for (let i = 0; i <= filter.length - 2; i++) {
                    const index = children.findIndex((t) => t === filter[i]);
                    children.splice(index + 1, 0, <Split direction="horizontal"/>);
                }
                result = children;
            }
        }
        return <div class={selectorPrefix}>{result}</div>;
    },
};
//# sourceMappingURL=index.jsx.map