import { Table, Button } from 'ant-design-vue';

import SearchForm from './searchform';

import SearchFormRow from './searchformrow';

import SearchFormLabel from './searchformlabel';

import SearchFormValue from './searchformvalue';
import SearchTable, {
  NUMBER_GENERATOR_RULE_ALONE,
  NUMBER_GENERATOR_RULE_CONTINUITY,
} from './searchtable';

import { withInstall } from '../../_util';

SearchTable.isUse = () => true;

SearchTable.use = (Vue) => {
  Vue.use(SearchTable.SearchForm);

  Vue.use(SearchTable.SearchFormRow);

  Vue.use(SearchTable.SearchFormLabel);

  Vue.use(SearchTable.SearchFormValue);
  Vue.use(Table);
  Vue.use(Button);
};

SearchTable.SearchForm = withInstall(SearchForm);
SearchTable.SearchFormRow = withInstall(SearchFormRow);
SearchTable.SearchFormLabel = withInstall(SearchFormLabel);
SearchTable.SearchFormValue = withInstall(SearchFormValue);
SearchTable.NUMBER_GENERATOR_RULE_ALONE = NUMBER_GENERATOR_RULE_ALONE;
SearchTable.NUMBER_GENERATOR_RULE_CONTINUITY = NUMBER_GENERATOR_RULE_CONTINUITY;
export default SearchTable;
