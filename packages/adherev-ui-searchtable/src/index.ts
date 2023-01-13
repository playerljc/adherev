import {
  Button,
  Checkbox,
  Form,
  Icon,
  Input,
  InputNumber,
  Popover,
  Rate,
  Slider,
  Switch,
  Table,
} from 'ant-design-vue';
import VueDraggableResizable from 'vue-draggable-resizable';

import AntdvFormItem from '@baifendian/adherev-ui-antdvformitem';
import Conditionalrender from '@baifendian/adherev-ui-conditionalrender';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import SlideLayout from '@baifendian/adherev-ui-slidelayout';
import Space from '@baifendian/adherev-ui-space';
import Split from '@baifendian/adherev-ui-split';
import Suspense from '@baifendian/adherev-ui-suspense';
import Teleport from '@baifendian/adherev-ui-teleport';
import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';
import Resource from '@baifendian/adherev-util-resource';
import Validator from '@baifendian/adherev-util-validator';

import { ProEditableCellSearchTable } from './Editable/ProEditableCellSearchTable';
import { ProEditableRowSearchTable } from './Editable/ProEditableRowSearchTable';
import SearchEditableCellTable from './Editable/SearchEditableCellTable';
import SearchEditableRowTable from './Editable/SearchEditableRowTable';
import ColumnSetting from './Extension/ColumnSetting';
import DisabledOption from './Extension/DisabledOption';
import EditableRowControl from './Extension/EditableCell/EditableRowControl';
import LinkColumn from './Extension/LinkColumn';
import OptionsWrap from './Extension/OptionsWrap';
import * as SearchAndPaginParams from './Extension/SearchAndPaginParams';
import TableDensitySetting from './Extension/TableDensitySetting';
import { ProSearchTable } from './ProSearchTable';
import ProTableFactory from './ProTableFactory';
import SearchTable, {
  NUMBER_GENERATOR_RULE_ALONE,
  NUMBER_GENERATOR_RULE_CONTINUITY,
  ROW_SELECTION_CONTINUOUS_MODE,
  ROW_SELECTION_NORMAL_MODE,
} from './SearchTable';
import SearchTableImplement from './SearchTableImplement';
import SearchTableImplementFactory from './SearchTableImplementFactory';
import SearchForm from './searchform';
import SearchFormLabel from './searchformlabel';
import SearchFormRow from './searchformrow';
import SearchFormValue from './searchformvalue';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

SearchTable.isUse = () => true;

SearchTable.use = (Vue) => {
  FlexLayout.isUse() && FlexLayout.use(Vue);
  Suspense.isUse() && Suspense.use(Vue);
  Intl.isUse() && Intl.use(Vue);
  AntdvFormItem.isUse() && AntdvFormItem.use(Vue);
  Conditionalrender.isUse() && Conditionalrender.use(Vue);
  SlideLayout.isUse() && SlideLayout.use(Vue);
  Space.isUse() && Space.use(Vue);
  Split.isUse() && Split.use(Vue);
  Teleport.isUse() && Teleport.use(Vue);
  Resource?.isUse?.() && Resource?.use?.(Vue);
  Validator.isUse() && Validator.use(Vue);

  Vue.use(SearchTable.SearchForm);
  Vue.use(SearchTable.SearchFormRow);
  Vue.use(SearchTable.SearchFormLabel);
  Vue.use(SearchTable.SearchFormValue);

  Vue.use(SearchTable.ColumnSetting);
  Vue.use(SearchTable.TableDensitySetting);
  Vue.use(SearchTable.DisabledOption);
  Vue.use(SearchTable.LinkColumn);
  Vue.use(SearchTable.OptionsWrap);
  Vue.use(SearchTable.EditableRowControl);

  Vue.use(Table);
  Vue.use(Button);
  Vue.use(Popover);
  Vue.use(Checkbox);
  Vue.use(Icon);
  Vue.use(Input);
  Vue.use(InputNumber);
  Vue.use(Popover);
  Vue.use(Rate);
  Vue.use(Slider);
  Vue.use(Switch);
  Vue.use(Form);

  Vue.component('vue-draggable-resizable', VueDraggableResizable);

  withVue(Vue, 'SearchTable', SearchTable);
};

SearchTable.SearchForm = withInstall(SearchForm);
SearchTable.SearchFormRow = withInstall(SearchFormRow);
SearchTable.SearchFormLabel = withInstall(SearchFormLabel);
SearchTable.SearchFormValue = withInstall(SearchFormValue);

SearchTable.ColumnSetting = withInstall(ColumnSetting);
SearchTable.TableDensitySetting = withInstall(TableDensitySetting);
SearchTable.DisabledOption = withInstall(DisabledOption);
SearchTable.LinkColumn = withInstall(LinkColumn);
SearchTable.OptionsWrap = withInstall(OptionsWrap);
SearchTable.EditableRowControl = withInstall(EditableRowControl);

SearchTable.SearchAndPaginParams = SearchAndPaginParams;
SearchTable.SearchTableImplement = SearchTableImplement;
SearchTable.ProSearchTable = ProSearchTable;
SearchTable.SearchTableImplementFactory = SearchTableImplementFactory;
SearchTable.ProTableFactory = ProTableFactory;
SearchTable.ProEditableCellSearchTable = ProEditableCellSearchTable;
SearchTable.ProEditableRowSearchTable = ProEditableRowSearchTable;
SearchTable.SearchEditableRowTable = SearchEditableRowTable;
SearchTable.SearchEditableCellTable = SearchEditableCellTable;
SearchTable.NUMBER_GENERATOR_RULE_ALONE = NUMBER_GENERATOR_RULE_ALONE;
SearchTable.NUMBER_GENERATOR_RULE_CONTINUITY = NUMBER_GENERATOR_RULE_CONTINUITY;
SearchTable.ROW_SELECTION_NORMAL_MODE = ROW_SELECTION_NORMAL_MODE;
SearchTable.ROW_SELECTION_CONTINUOUS_MODE = ROW_SELECTION_CONTINUOUS_MODE;

export default SearchTable;
