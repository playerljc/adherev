import { Table, Button, Popover, Checkbox } from 'ant-design-vue';
import VueDraggableResizable from 'vue-draggable-resizable';

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

  // @ts-ignore
  Vue.use(SearchTable.ColumnSetting);

  // @ts-ignore
  Vue.use(SearchTable.TableDensitySetting);

  Vue.use(Table);

  Vue.use(Button);

  Vue.use(Popover);

  Vue.use(Checkbox);

  Vue.component('vue-draggable-resizable', VueDraggableResizable);

  withVue(Vue, 'SearchTable', SearchTable);
};

// @ts-ignore
SearchTable.SearchForm = withInstall(SearchForm);
// @ts-ignore
SearchTable.SearchFormRow = withInstall(SearchFormRow);
// @ts-ignore
SearchTable.SearchFormLabel = withInstall(SearchFormLabel);
// @ts-ignore
SearchTable.SearchFormValue = withInstall(SearchFormValue);
// @ts-ignore
SearchTable.ColumnSetting = withInstall(ColumnSetting);
// @ts-ignore
SearchTable.TableDensitySetting = withInstall(TableDensitySetting);
// @ts-ignore
SearchTable.SearchTableImplement = SearchTableImplement;

// @ts-ignore
SearchTable.NUMBER_GENERATOR_RULE_ALONE = NUMBER_GENERATOR_RULE_ALONE;
// @ts-ignore
SearchTable.NUMBER_GENERATOR_RULE_CONTINUITY = NUMBER_GENERATOR_RULE_CONTINUITY;
// @ts-ignore
SearchTable.ROW_SELECTION_NORMAL_MODE = ROW_SELECTION_NORMAL_MODE;
// @ts-ignore
SearchTable.ROW_SELECTION_CONTINUOUS_MODE = ROW_SELECTION_CONTINUOUS_MODE;

export default SearchTable;
