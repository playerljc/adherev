"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.array.find.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.PlayGroundTabPropTypes=void 0;var tslib_1=require("tslib"),adherev_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-conditionalrender")),Card_1=tslib_1.__importDefault(require("./Card")),CodeTabPanel_1=tslib_1.__importStar(require("./CodeTabPanel")),PlayGroundMixins_1=tslib_1.__importStar(require("./PlayGroundMixins")),PlayGroundTab=(exports.PlayGroundTabPropTypes=tslib_1.__assign(tslib_1.__assign({},PlayGroundMixins_1.PlaygroundMixinsProps),CodeTabPanel_1.CodeTabPanelDefaultProps),{name:"adv-playground-tab",mixins:[PlayGroundMixins_1.default],props:tslib_1.__assign({},exports.PlayGroundTabPropTypes),data:function(){return{activeKey:this.active}},watch:{activeKey:function(e){this.activeKey=e}},methods:{getClipboardText:function(){var e=this.config,r=this.activeKey;return Promise.resolve(null==(e=e.find(function(e){return e.key===r}))?void 0:e.codeText)},renderCodeView:function(e){var r=this,i=this.expand,t=this.config;return e(adherev_ui_conditionalrender_1.default.Show,{attrs:{conditional:i}},[e(Card_1.default,[e(CodeTabPanel_1.default,{attrs:{config:t,active:this.activeKey},on:{change:function(e){r.activeKey=e}}})])])}}});exports.default=PlayGroundTab;
//# sourceMappingURL=PlayGroundTab.js.map
