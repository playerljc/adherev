import { Table, Button } from 'ant-design-vue';

import SearchForm from './searchform';

import SearchFormRow from './searchformrow';

import SearchFormLabel from './searchformlabel';

import SearchFormValue from './searchformvalue';

import SearchTable, {
  NUMBER_GENERATOR_RULE_ALONE,
  NUMBER_GENERATOR_RULE_CONTINUITY,
  ROW_SELECTION_NORMAL_MODE,
  ROW_SELECTION_CONTINUOUS_MODE,
} from './searchtable';

import SearchTableImplement from './searchtableimplement';

import BfdUtil from '@baifendian/adherev-util';
const {
  _util: { withInstall, withVue },
} = BfdUtil;

SearchTable.isUse = () => true;

SearchTable.use = (Vue: any) => {
  Vue.use(SearchTable.SearchForm);

  Vue.use(SearchTable.SearchFormRow);

  Vue.use(SearchTable.SearchFormLabel);

  Vue.use(SearchTable.SearchFormValue);

  Vue.use(Table);

  Vue.use(Button);

  withVue(Vue, 'SearchTable', SearchTable);
};

SearchTable.SearchForm = withInstall(SearchForm);
SearchTable.SearchFormRow = withInstall(SearchFormRow);
SearchTable.SearchFormLabel = withInstall(SearchFormLabel);
SearchTable.SearchFormValue = withInstall(SearchFormValue);
SearchTable.SearchTableImplement = SearchTableImplement;

SearchTable.NUMBER_GENERATOR_RULE_ALONE = NUMBER_GENERATOR_RULE_ALONE;
SearchTable.NUMBER_GENERATOR_RULE_CONTINUITY = NUMBER_GENERATOR_RULE_CONTINUITY;
SearchTable.ROW_SELECTION_NORMAL_MODE = ROW_SELECTION_NORMAL_MODE;
SearchTable.ROW_SELECTION_CONTINUOUS_MODE = ROW_SELECTION_CONTINUOUS_MODE;

export default SearchTable;
