import"core-js/modules/es.number.constructor.js";import"core-js/modules/es.array.map.js";import{__assign}from"tslib";import{Radio}from"../../AntdvFormItemNormalize";export default{name:"RadioCustomFormItem",slots:["option"],props:{radioGroupProps:{type:Object,default:function(){return{}}},value:{type:[Number,String],default:""},dataSource:{type:Array,default:function(){return[]}}},render:function(e){var s=this;return e(Radio.Group,{props:__assign(__assign({},this.radioGroupProps),{value:this.value}),attrs:this.$attrs,scopedSlots:this.$scopedSlots,on:this.$listeners},this.dataSource.map(function(o){var t,r;return null==(r=null==(t=s.$scopedSlots)?void 0:t.option)?void 0:r.call(t,{data:o,item:e(Radio,{key:o.value,props:{value:o.value,disabled:o.disabled}},o.label)})}))}};
//# sourceMappingURL=index.js.map
