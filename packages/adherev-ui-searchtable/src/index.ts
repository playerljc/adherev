import { Table, Button, Popover, Checkbox } from 'ant-design-vue';
// import VueDraggableResizable from 'vue-draggable-resizable';
import SearchForm from './searchform';

import SearchFormRow from './searchformrow';

import SearchFormLabel from './searchformlabel';

import SearchFormValue from './searchformvalue';

import ColumnSetting from './Extension/ColumnSetting';

import TableDensitySetting from './Extension/TableDensitySetting';

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

  Vue.use(SearchTable.ColumnSetting);

  Vue.use(SearchTable.TableDensitySetting);

  Vue.use(Table);

  Vue.use(Button);

  Vue.use(Popover);

  Vue.use(Checkbox);

  // Vue.component('vue-draggable-resizable', VueDraggableResizable);

  withVue(Vue, 'SearchTable', SearchTable);
};

SearchTable.SearchForm = withInstall(SearchForm);
SearchTable.SearchFormRow = withInstall(SearchFormRow);
SearchTable.SearchFormLabel = withInstall(SearchFormLabel);
SearchTable.SearchFormValue = withInstall(SearchFormValue);
SearchTable.ColumnSetting = withInstall(ColumnSetting);
SearchTable.TableDensitySetting = withInstall(TableDensitySetting);
SearchTable.SearchTableImplement = SearchTableImplement;

SearchTable.NUMBER_GENERATOR_RULE_ALONE = NUMBER_GENERATOR_RULE_ALONE;
SearchTable.NUMBER_GENERATOR_RULE_CONTINUITY = NUMBER_GENERATOR_RULE_CONTINUITY;
SearchTable.ROW_SELECTION_NORMAL_MODE = ROW_SELECTION_NORMAL_MODE;
SearchTable.ROW_SELECTION_CONTINUOUS_MODE = ROW_SELECTION_CONTINUOUS_MODE;

export default SearchTable;
