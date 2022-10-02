import { Button, Checkbox, Popover, Table } from 'ant-design-vue';
import VueDraggableResizable from 'vue-draggable-resizable';

import BfdUtil from '@baifendian/adherev-util';

import ColumnSetting from './Extension/ColumnSetting';
import TableDensitySetting from './Extension/TableDensitySetting';
import SearchForm from './searchform';
import SearchFormLabel from './searchformlabel';
import SearchFormRow from './searchformrow';
import SearchFormValue from './searchformvalue';
import SearchTable, {
  NUMBER_GENERATOR_RULE_ALONE,
  NUMBER_GENERATOR_RULE_CONTINUITY,
  ROW_SELECTION_CONTINUOUS_MODE,
  ROW_SELECTION_NORMAL_MODE,
} from './searchtable';
import SearchTableImplement from './searchtableimplement';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

SearchTable.isUse = () => true;

SearchTable.use = (Vue) => {
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

  Vue.component('vue-draggable-resizable', VueDraggableResizable);

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
