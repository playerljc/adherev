import classNames from 'classnames';
const selectorPrefix = 'adherev-ui-searchform-row';
const SearchFormRow = {
    name: 'adv-searchtable-searchform-row',
    render(h) {
        const { $slots } = this;
        return <tr class={classNames(selectorPrefix)}>{$slots.default}</tr>;
    },
};
export default SearchFormRow;
//# sourceMappingURL=searchformrow.jsx.map