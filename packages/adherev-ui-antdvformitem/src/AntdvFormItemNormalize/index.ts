import AutoComplete from './formitems/AutoComplete';
import Cascader from './formitems/Cascader';
import DatePicker from './formitems/DatePicker';
import Input from './formitems/Input';
import InputNumberDecimal1 from './formitems/InputNumberDecimal1';
import InputNumberDecimal2 from './formitems/InputNumberDecimal2';
import InputNumberInteger from './formitems/InputNumberInteger';
import Mentions from './formitems/Mentions';
import Modal from './formitems/Modal';
import MultipleSelect from './formitems/MultipleSelect';
import * as AntdvComponents from './formitems/Others';
import RangePicker from './formitems/RangePicker';
import Select from './formitems/Select';
import Slider from './formitems/Slider';
import TextArea from './formitems/TextArea';
import TimePicker from './formitems/TimePicker';
import Tooltip from './formitems/Tooltip';
import TreeSelect from './formitems/TreeSelect';
import Upload from './formitems/Upload';

export {
  Select,
  MultipleSelect,
  TreeSelect,
  AutoComplete,
  DatePicker,
  RangePicker,
  TimePicker,
  Cascader,
  Modal,
  Mentions,
  Slider,
  Tooltip,
  Upload,
  InputNumberInteger,
  InputNumberDecimal1,
  InputNumberDecimal2,
  Input,
  TextArea,
};

const Obj = {
  Select,
  MultipleSelect,
  TreeSelect,
  AutoComplete,
  DatePicker,
  RangePicker,
  TimePicker,
  Cascader,
  Modal,
  Mentions,
  Slider,
  Tooltip,
  Upload,
  InputNumberInteger,
  InputNumberDecimal1,
  InputNumberDecimal2,
  Input,
  TextArea,
  ...AntdvComponents,
};

export * as AntdvdComponents from './formitems/Others';

export default {
  install: (Vue) => {
    Object.keys(Obj).forEach((key) => {
      // 全局注册组件
      Vue.component(`adv-antdvformitemnormalize-${key.toLowerCase()}`, Obj[key]);
    });
  },
};
