"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.PlayGroundPropTypes=void 0;var tslib_1=require("tslib"),adherev_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-conditionalrender")),Card_1=tslib_1.__importDefault(require("./Card")),CodePanel_1=tslib_1.__importStar(require("./CodePanel")),PlayGroundMixins_1=tslib_1.__importStar(require("./PlayGroundMixins"));exports.PlayGroundPropTypes=tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({},PlayGroundMixins_1.PlaygroundMixinsProps),CodePanel_1.CodePanelPropTypes),{codeText:{type:String,default:""}}),exports.default={name:"adv-playground",mixins:[PlayGroundMixins_1.default],props:tslib_1.__assign({},exports.PlayGroundPropTypes),methods:{getClipboardText:function(){return Promise.resolve(this.codeText)},renderCodeView:function(e){var r=this,i=r.expand,o=r.lang,r=r.codeText;return e(adherev_ui_conditionalrender_1.default.Show,{attrs:{conditional:i}},[e(Card_1.default,[e(CodePanel_1.default,{attrs:{lang:o}},[r])])])}}};
//# sourceMappingURL=PlayGround.js.map
