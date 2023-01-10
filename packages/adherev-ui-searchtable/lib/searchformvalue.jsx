import classNames from 'classnames';
const selectorPrefix = 'adherev-ui-searchform-value';
const SearchFormValue = {
    name: 'adv-searchtable-searchform-value',
    render(h) {
        const { $slots } = this;
        return <td class={classNames(selectorPrefix)}>{$slots.default}</td>;
    },
};
export default SearchFormValue;
//# sourceMappingURL=searchformvalue.jsx.map