"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),adherev_util_1=tslib_1.__importDefault(require("@baifendian/adherev-util")),cloneElement=adherev_util_1.default._util.cloneElement,EditableRow={methods:{useEditableRow:function(e,t){var l=t;return l=(this.props.columns||[]).some(function(e){return!(null==(e=null==e?void 0:e.$editable)||!e.editable)})?cloneElement(t,{children:tslib_1.__spreadArray([],(null==t?void 0:t.children)||[],!0)}):l}}};exports.default=EditableRow;
//# sourceMappingURL=EditableRow.js.map