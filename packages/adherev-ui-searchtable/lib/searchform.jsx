import classNames from 'classnames';
const selectorPrefix = 'adherev-ui-searchform';
const SearchForm = {
    name: 'adv-searchtable-searchform',
    render(h) {
        const { $slots } = this;
        return (<table class={classNames(selectorPrefix)}>
        <tbody>{$slots.default}</tbody>
      </table>);
    },
};
export default SearchForm;
//# sourceMappingURL=searchform.jsx.map