import classNames from 'classnames';
const selectorPrefix = 'adherev-ui-searchform-label';
const SearchFormLabel = {
    name: 'adv-searchtable-searchform-label',
    render(h) {
        const { $slots } = this;
        return <td class={classNames(selectorPrefix)}>{$slots.default}</td>;
    },
};
export default SearchFormLabel;
//# sourceMappingURL=searchformlabel.jsx.map