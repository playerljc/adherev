import { Table, Button } from 'ant-design-vue';

// @ts-ignore
import SearchForm from './searchform';
// @ts-ignore
import SearchFormRow from './searchformrow';
// @ts-ignore
import SearchFormLabel from './searchformlabel';
// @ts-ignore
import SearchFormValue from './searchformvalue';
import SearchTable, {
  NUMBER_GENERATOR_RULE_ALONE,
  NUMBER_GENERATOR_RULE_CONTINUITY,
  // @ts-ignore
} from './searchtable';

// @ts-ignore
import { withInstall } from '../../_util';

// @ts-ignore
SearchTable.isUse = () => true;
// @ts-ignore
SearchTable.use = (Vue) => {
  // @ts-ignore
  Vue.use(SearchTable.SearchForm);
  // @ts-ignore
  Vue.use(SearchTable.SearchFormRow);
  // @ts-ignore
  Vue.use(SearchTable.SearchFormLabel);
  // @ts-ignore
  Vue.use(SearchTable.SearchFormValue);
  Vue.use(Table);
  Vue.use(Button);
};

// @ts-ignore
SearchTable.SearchForm = withInstall(SearchForm);
SearchTable.SearchFormRow = withInstall(SearchFormRow);
SearchTable.SearchFormLabel = withInstall(SearchFormLabel);
SearchTable.SearchFormValue = withInstall(SearchFormValue);
SearchTable.NUMBER_GENERATOR_RULE_ALONE = NUMBER_GENERATOR_RULE_ALONE;
SearchTable.NUMBER_GENERATOR_RULE_CONTINUITY = NUMBER_GENERATOR_RULE_CONTINUITY;
export default SearchTable;
