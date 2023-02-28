import {
  Button,
  Checkbox,
  ConfigProvider,
  Form,
  Input,
  InputNumber,
  Popover,
  Rate,
  Slider,
  Switch,
  Table,
} from 'ant-design-vue';
import { App } from 'vue';

import AntdvFormItem from '@baifendian/adherev-ui-antdvformitem';
import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import SlideLayout from '@baifendian/adherev-ui-slidelayout';
import Space from '@baifendian/adherev-ui-space';
import Split from '@baifendian/adherev-ui-split';
import Suspense from '@baifendian/adherev-ui-suspense';
import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';
import Resource from '@baifendian/adherev-util-resource';
import Validator from '@baifendian/adherev-util-validator';

import { ProRowDragSortSearchTable } from './DragSort/RowDragSort/ProRowDragSortSearchTable';
import SearchRowDragSortTable from './DragSort/RowDragSort/SearchRowDragSortTable';
import { ProDragSortEditableCellSearchTable } from './DragSortEditable/ProDragSortEditableCellSearchTable';
import { ProDragSortEditableRowSearchTable } from './DragSortEditable/ProDragSortEditableRowSearchTable';
import { ProDragSortEditableSearchTable } from './DragSortEditable/ProDragSortEditableSearchTable';
import SearchDragSortEditableCellTable from './DragSortEditable/SearchDragSortEditableCellTable';
import SearchDragSortEditableRowTable from './DragSortEditable/SearchDragSortEditableRowTable';
import SearchDragSortEditableTable from './DragSortEditable/SearchDragSortEditableTable';
import { ProEditableCellSearchTable } from './Editable/ProEditableCellSearchTable';
import { ProEditableRowSearchTable } from './Editable/ProEditableRowSearchTable';
import { ProEditableSearchTable } from './Editable/ProEditableSearchTable';
import SearchEditableCellTable from './Editable/SearchEditableCellTable';
import SearchEditableRowTable from './Editable/SearchEditableRowTable';
import SearchEditableTable from './Editable/SearchEditableTable';
import ColumnSetting from './Extension/ColumnSetting';
import DisabledOption from './Extension/DisabledOption';
import EditableRowControl from './Extension/EditableCell/EditableRowControl';
import EditableTableControl from './Extension/EditableCell/EditableTableControl';
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

const {
  _util: { withVue },
} = BfdUtil;

SearchTable.ColumnSetting = ColumnSetting;
SearchTable.TableDensitySetting = TableDensitySetting;
SearchTable.DisabledOption = DisabledOption;
SearchTable.LinkColumn = LinkColumn;
SearchTable.OptionsWrap = OptionsWrap;
SearchTable.EditableRowControl = EditableRowControl;
SearchTable.EditableTableControl = EditableTableControl;
SearchTable.SearchAndPaginParams = SearchAndPaginParams;
SearchTable.SearchTableImplement = SearchTableImplement;
SearchTable.ProSearchTable = ProSearchTable;
SearchTable.SearchTableImplementFactory = SearchTableImplementFactory;
SearchTable.ProTableFactory = ProTableFactory;
SearchTable.ProEditableCellSearchTable = ProEditableCellSearchTable;
SearchTable.ProEditableRowSearchTable = ProEditableRowSearchTable;
SearchTable.ProEditableSearchTable = ProEditableSearchTable;
SearchTable.ProRowDragSortSearchTable = ProRowDragSortSearchTable;
SearchTable.ProDragSortEditableCellSearchTable = ProDragSortEditableCellSearchTable;
SearchTable.ProDragSortEditableRowSearchTable = ProDragSortEditableRowSearchTable;
SearchTable.ProDragSortEditableSearchTable = ProDragSortEditableSearchTable;
SearchTable.SearchEditableCellTable = SearchEditableCellTable;
SearchTable.SearchEditableRowTable = SearchEditableRowTable;
SearchTable.SearchEditableTable = SearchEditableTable;
SearchTable.SearchRowDragSortTable = SearchRowDragSortTable;
SearchTable.SearchDragSortEditableCellTable = SearchDragSortEditableCellTable;
SearchTable.SearchDragSortEditableRowTable = SearchDragSortEditableRowTable;
SearchTable.SearchDragSortEditableTable = SearchDragSortEditableTable;

SearchTable.NUMBER_GENERATOR_RULE_ALONE = NUMBER_GENERATOR_RULE_ALONE;
SearchTable.NUMBER_GENERATOR_RULE_CONTINUITY = NUMBER_GENERATOR_RULE_CONTINUITY;
SearchTable.ROW_SELECTION_NORMAL_MODE = ROW_SELECTION_NORMAL_MODE;
SearchTable.ROW_SELECTION_CONTINUOUS_MODE = ROW_SELECTION_CONTINUOUS_MODE;

SearchTable.install = (app: App) => {
  app.use(FlexLayout);
  app.use(Suspense);
  app.use(Intl);
  app.use(AntdvFormItem);
  app.use(ConditionalRender);
  app.use(SlideLayout);
  app.use(Space);
  app.use(Split);
  app.use(Resource);
  app.use(Validator);

  app.component(ColumnSetting.name, ColumnSetting);
  app.component(TableDensitySetting.name, TableDensitySetting);
  app.component(DisabledOption.name, DisabledOption);
  app.component(LinkColumn.name, LinkColumn);
  app.component(OptionsWrap.name, OptionsWrap);
  app.component(EditableRowControl.name, EditableRowControl);
  app.component(EditableTableControl.name, EditableTableControl);

  app.use(Table);
  app.use(Button);
  app.use(Popover);
  app.use(Checkbox);
  app.use(Input);
  app.use(InputNumber);
  app.use(Popover);
  app.use(Rate);
  app.use(Slider);
  app.use(Switch);
  app.use(Form);
  app.use(ConfigProvider);

  withVue(app, 'SearchTable', SearchTable);

  return app;
};

export default SearchTable;
