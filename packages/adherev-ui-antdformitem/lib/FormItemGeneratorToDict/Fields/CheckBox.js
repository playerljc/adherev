"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.object.keys.js"),require("core-js/modules/es.string.ends-with.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.number.constructor.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),adherev_util_dict_1=tslib_1.__importDefault(require("@baifendian/adherev-util-dict")),CheckBoxCheckAllCustomFormItem_1=tslib_1.__importDefault(require("../CheckBoxCheckAllCustomFormItem")),CheckBoxCheckAllHorizontalFormItem_1=tslib_1.__importDefault(require("../CheckBoxCheckAllHorizontalFormItem")),CheckBoxCheckAllSelectFormItem_1=tslib_1.__importDefault(require("../CheckBoxCheckAllSelectFormItem")),CheckBoxCheckAllVerticalFormItem_1=tslib_1.__importDefault(require("../CheckBoxCheckAllVerticalFormItem")),CheckBoxCustomFormItem_1=tslib_1.__importDefault(require("../CheckBoxCustomFormItem")),CheckBoxHorizontalFormItem_1=tslib_1.__importDefault(require("../CheckBoxHorizontalFormItem")),CheckBoxSelectFormItem_1=tslib_1.__importDefault(require("../CheckBoxSelectFormItem")),CheckBoxVerticalFormItem_1=tslib_1.__importDefault(require("../CheckBoxVerticalFormItem")),FormItemComponents={};exports.default=function(){var e=Object.keys(adherev_util_dict_1.default.handlers).filter(function(e){return e.endsWith("CheckBox")}),t=Object.keys(adherev_util_dict_1.default.handlers).filter(function(e){return e.endsWith("DynamicCheckBox")});return e.forEach(function(t){FormItemComponents["".concat(t,"VerticalFormItem")]={name:"".concat(t,"VerticalFormItem"),props:{cascadeParams:{type:[String,Number]},checkGroupProps:CheckBoxVerticalFormItem_1.default.props.checkBoxGroupProps,value:CheckBoxVerticalFormItem_1.default.props.value},computed:{dataSource:function(){var e=adherev_util_dict_1.default.value[t].value;return e instanceof Function?e(this.cascadeParams):e}},render:function(e){return e(CheckBoxVerticalFormItem_1.default,{props:{checkGroupProps:this.checkGroupProps,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(t,"HorizontalFormItem")]={name:"".concat(t,"HorizontalFormItem"),props:{cascadeParams:{type:[String,Number]},checkGroupProps:CheckBoxHorizontalFormItem_1.default.props.checkBoxGroupProps,value:CheckBoxHorizontalFormItem_1.default.props.value},computed:{dataSource:function(){var e=adherev_util_dict_1.default.value[t].value;return e instanceof Function?e(this.cascadeParams):e}},render:function(e){return e(CheckBoxHorizontalFormItem_1.default,{props:{checkGroupProps:this.checkGroupProps,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(t,"CheckAllVerticalFormItem")]={name:"".concat(t,"CheckAllVerticalFormItem"),props:{cascadeParams:{type:[String,Number]},checkGroupProps:CheckBoxCheckAllVerticalFormItem_1.default.props.checkBoxGroupProps,value:CheckBoxCheckAllVerticalFormItem_1.default.props.value},computed:{dataSource:function(){var e=adherev_util_dict_1.default.value[t].value;return e instanceof Function?e(this.cascadeParams):e}},render:function(e){return e(CheckBoxCheckAllVerticalFormItem_1.default,{props:{checkGroupProps:this.checkGroupProps,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(t,"CheckAllHorizontalFormItem")]={name:"".concat(t,"CheckAllHorizontalFormItem"),props:{cascadeParams:{type:[String,Number]},checkGroupProps:CheckBoxCheckAllHorizontalFormItem_1.default.props.checkBoxGroupProps,value:CheckBoxCheckAllHorizontalFormItem_1.default.props.value},computed:{dataSource:function(){var e=adherev_util_dict_1.default.value[t].value;return e instanceof Function?e(this.cascadeParams):e}},render:function(e){return e(CheckBoxCheckAllHorizontalFormItem_1.default,{props:{checkGroupProps:this.checkGroupProps,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(t,"SelectFormItem")]={name:"".concat(t,"SelectFormItem"),props:{cascadeParams:{type:[String,Number]},selectProps:CheckBoxSelectFormItem_1.default.props.selectProps,value:CheckBoxSelectFormItem_1.default.props.value},computed:{dataSource:function(){var e=adherev_util_dict_1.default.value[t].value;return e instanceof Function?e(this.cascadeParams):e}},render:function(e){return e(CheckBoxSelectFormItem_1.default,{props:{selectProps:this.selectProps,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(t,"CheckAllSelectFormItem")]={name:"".concat(t,"CheckAllSelectFormItem"),props:{cascadeParams:{type:[String,Number]},selectProps:CheckBoxCheckAllSelectFormItem_1.default.props.selectProps,value:CheckBoxCheckAllSelectFormItem_1.default.props.value},computed:{dataSource:function(){var e=adherev_util_dict_1.default.value[t].value;return e instanceof Function?e(this.cascadeParams):e}},render:function(e){return e(CheckBoxCheckAllSelectFormItem_1.default,{props:{selectProps:this.selectProps,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(t,"CustomFormItem")]={name:"".concat(t,"CustomFormItem"),props:{cascadeParams:{type:[String,Number]},checkGroupProps:CheckBoxCustomFormItem_1.default.props.checkBoxGroupProps,value:CheckBoxCustomFormItem_1.default.props.value},computed:{dataSource:function(){var e=adherev_util_dict_1.default.value[t].value;return e instanceof Function?e(this.cascadeParams):e}},render:function(e){return e(CheckBoxCustomFormItem_1.default,{props:{checkGroupProps:this.checkGroupProps,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(t,"CheckAllCustomFormItem")]={name:"".concat(t,"CheckAllCustomFormItem"),props:{cascadeParams:{type:[String,Number]},checkGroupProps:CheckBoxCheckAllCustomFormItem_1.default.props.checkBoxGroupProps,value:CheckBoxCheckAllCustomFormItem_1.default.props.value},computed:{dataSource:function(){var e=adherev_util_dict_1.default.value[t].value;return e instanceof Function?e(this.cascadeParams):e}},render:function(e){return e(CheckBoxCheckAllCustomFormItem_1.default,{props:{checkGroupProps:this.checkGroupProps,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}}}),t.forEach(function(o){FormItemComponents["".concat(o,"VerticalFormItem")]={name:"".concat(o,"VerticalFormItem"),props:{cascadeParams:{type:[String,Number]},checkBoxGroupProps:CheckBoxVerticalFormItem_1.default.props.checkBoxGroupProps,value:CheckBoxVerticalFormItem_1.default.props.value},data:function(){return{dataSource:[]}},methods:{$loadData:function(e){var t=adherev_util_dict_1.default.value[o].value;t instanceof Function&&t(e).then(function(e){this.dataSource=e})}},watch:{cascadeParams:function(e){this.$loadData(e)}},mounted:function(){var e=adherev_util_dict_1.default.value[o].value;e.then&&e.then(function(e){this.dataSource=e})},render:function(e){return e(CheckBoxVerticalFormItem_1.default,{props:{checkBoxGroupProps:this.checkBoxGroupProps,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(o,"HorizontalFormItem")]={name:"".concat(o,"HorizontalFormItem"),props:{cascadeParams:{type:[String,Number]},checkBoxGroupProps:CheckBoxHorizontalFormItem_1.default.props.checkBoxGroupProps,value:CheckBoxHorizontalFormItem_1.default.props.value},data:function(){return{dataSource:[]}},methods:{$loadData:function(e){var t=adherev_util_dict_1.default.value[o].value;t instanceof Function&&t(e).then(function(e){this.dataSource=e})}},watch:{cascadeParams:function(e){this.$loadData(e)}},mounted:function(){var e=adherev_util_dict_1.default.value[o].value;e.then&&e.then(function(e){this.dataSource=e})},render:function(e){return e(CheckBoxHorizontalFormItem_1.default,{props:{checkBoxGroupProps:this.checkBoxGroupProps,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(o,"CheckAllVerticalFormItem")]={name:"".concat(o,"CheckAllVerticalFormItem"),props:{cascadeParams:{type:[String,Number]},checkBoxGroupProps:CheckBoxCheckAllVerticalFormItem_1.default.props.checkBoxGroupProps,value:CheckBoxCheckAllVerticalFormItem_1.default.props.value},data:function(){return{dataSource:[]}},methods:{$loadData:function(e){var t=adherev_util_dict_1.default.value[o].value;t instanceof Function&&t(e).then(function(e){this.dataSource=e})}},watch:{cascadeParams:function(e){this.$loadData(e)}},mounted:function(){var e=adherev_util_dict_1.default.value[o].value;e.then&&e.then(function(e){this.dataSource=e})},render:function(e){return e(CheckBoxCheckAllVerticalFormItem_1.default,{props:{checkBoxGroupProps:this.checkBoxGroupProps,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(o,"CheckAllHorizontalFormItem")]={name:"".concat(o,"CheckAllHorizontalFormItem"),props:{cascadeParams:{type:[String,Number]},checkBoxGroupProps:CheckBoxCheckAllHorizontalFormItem_1.default.props.checkBoxGroupProps,value:CheckBoxCheckAllHorizontalFormItem_1.default.props.value},data:function(){return{dataSource:[]}},methods:{$loadData:function(e){var t=adherev_util_dict_1.default.value[o].value;t instanceof Function&&t(e).then(function(e){this.dataSource=e})}},watch:{cascadeParams:function(e){this.$loadData(e)}},mounted:function(){var e=adherev_util_dict_1.default.value[o].value;e.then&&e.then(function(e){this.dataSource=e})},render:function(e){return e(CheckBoxCheckAllHorizontalFormItem_1.default,{props:{checkBoxGroupProps:this.checkBoxGroupProps,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(o,"SelectFormItem")]={name:"".concat(o,"SelectFormItem"),props:{cascadeParams:{type:[String,Number]},selectProps:CheckBoxSelectFormItem_1.default.props.selectProps,value:CheckBoxSelectFormItem_1.default.props.value},data:function(){return{dataSource:[]}},methods:{$loadData:function(e){var t=adherev_util_dict_1.default.value[o].value;t instanceof Function&&t(e).then(function(e){this.dataSource=e})}},watch:{cascadeParams:function(e){this.$loadData(e)}},mounted:function(){var e=adherev_util_dict_1.default.value[o].value;e.then&&e.then(function(e){this.dataSource=e})},render:function(e){return e(CheckBoxSelectFormItem_1.default,{props:{selectProps:this.selectProps,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(o,"CheckAllSelectFormItem")]={name:"".concat(o,"CheckAllSelectFormItem"),props:{cascadeParams:{type:[String,Number]},selectProps:CheckBoxCheckAllSelectFormItem_1.default.props.selectProps,value:CheckBoxCheckAllSelectFormItem_1.default.props.value},data:function(){return{dataSource:[]}},methods:{$loadData:function(e){var t=adherev_util_dict_1.default.value[o].value;t instanceof Function&&t(e).then(function(e){this.dataSource=e})}},watch:{cascadeParams:function(e){this.$loadData(e)}},mounted:function(){var e=adherev_util_dict_1.default.value[o].value;e.then&&e.then(function(e){this.dataSource=e})},render:function(e){return e(CheckBoxCheckAllSelectFormItem_1.default,{props:{selectProps:this.selectProps,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(o,"CustomFormItem")]={name:"".concat(o,"CustomFormItem"),props:{cascadeParams:{type:[String,Number]},checkBoxGroupProps:CheckBoxCustomFormItem_1.default.props.checkBoxGroupProps,value:CheckBoxCustomFormItem_1.default.props.value},data:function(){return{dataSource:[]}},methods:{$loadData:function(e){var t=adherev_util_dict_1.default.value[o].value;t instanceof Function&&t(e).then(function(e){this.dataSource=e})}},watch:{cascadeParams:function(e){this.$loadData(e)}},mounted:function(){var e=adherev_util_dict_1.default.value[o].value;e.then&&e.then(function(e){this.dataSource=e})},render:function(e){return e(CheckBoxCustomFormItem_1.default,{props:{checkBoxGroupProps:this.checkBoxGroupProps,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}},FormItemComponents["".concat(o,"CheckAllCustomFormItem")]={name:"".concat(o,"CheckAllCustomFormItem"),props:{cascadeParams:{type:[String,Number]},checkBoxGroupProps:CheckBoxCheckAllCustomFormItem_1.default.props.checkBoxGroupProps,value:CheckBoxCheckAllCustomFormItem_1.default.props.value},data:function(){return{dataSource:[]}},methods:{$loadData:function(e){var t=adherev_util_dict_1.default.value[o].value;t instanceof Function&&t(e).then(function(e){this.dataSource=e})}},watch:{cascadeParams:function(e){this.$loadData(e)}},mounted:function(){var e=adherev_util_dict_1.default.value[o].value;e.then&&e.then(function(e){this.dataSource=e})},render:function(e){return e(CheckBoxCheckAllCustomFormItem_1.default,{props:{checkBoxGroupProps:this.checkBoxGroupProps,value:this.value,dataSource:this.dataSource},attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.$slots.default)}}}),FormItemComponents};
//# sourceMappingURL=CheckBox.js.map
