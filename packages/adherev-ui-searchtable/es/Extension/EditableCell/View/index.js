import"core-js/modules/es.number.constructor.js";import{Icon}from"ant-design-vue";import classNames from"classnames";import{selectorPrefix}from"../../../SearchTable";export default{props:{rowIndex:{type:Number},record:{type:Object},column:{type:Object},columns:{type:Array},editableConfig:{type:Object}},inject:["getContext"],emits:["triggerChange"],methods:{onTrigger:function(){var e,t=this;this.editableConfig.onBeforeToEdit?null!=(e=this.editableConfig.onBeforeToEdit({value:this.record[this.editableConfig.dataIndex],record:this.record,dataIndex:this.editableConfig.dataIndex,rowIndex:this.rowIndex}))&&e.then(function(){return t.$emit("triggerChange")}):this.$emit("triggerChange")},renderTrigger:function(){return h(Icon,{attrs:{type:"edit"}})}},render:function(e){var t=this,i=t.editableConfig,r=i.renderToEditTrigger,l=i.useTrigger,i=i.dataIndex,o=t.record,n=t.rowIndex,t=t.column;return l?(l={value:null==o?void 0:o[i],record:o,dataIndex:i,rowIndex:n},o=null==(n=null==(i=null==(o=this.getContext)?void 0:o.call(this))?void 0:i.context)?void 0:n.$scopedSlots,e("div",{class:"".concat(selectorPrefix,"-editablecell-view")},[e("div",{class:classNames("".concat(selectorPrefix,"-editablecell-view-inner"),"ellipsis"in t&&t.ellipsis?"".concat(selectorPrefix,"-editablecell-view-inner-ellipsis"):"")},[null==this?void 0:this.$slots.default]),e("div",{class:"".concat(selectorPrefix,"-editablecell-view-trigger")},[e("div",{class:"".concat(selectorPrefix,"-editablecell-view-trigger-inner"),on:{click:this.onTrigger}},[(null==(i=null==o?void 0:o[r])?void 0:i.call(o,l))||(null==r?void 0:r(l)),!o[r]&&!r&&this.renderTrigger()])])])):null==this?void 0:this.$slots.default}};
//# sourceMappingURL=index.js.map
