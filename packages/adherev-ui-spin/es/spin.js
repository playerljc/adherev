import"core-js/modules/es.number.constructor.js";import Resource from"@baifendian/adherev-util-resource";var selectorPrefix="adherev-ui-spin",Spin={name:"adv-spin",props:{spinning:{type:Boolean,default:!1},text:{type:String,default:""},zIndex:{type:Number,default:Resource.Dict.value.ResourceNormalMaxZIndex.value}},render:function(e){var r=this,t=r.spinning,i=r.text,r=r.zIndex;return t?e("div",{class:selectorPrefix,style:{zIndex:r}},[e("span",{class:selectorPrefix+"-dot"},[e("i"),e("i"),e("i"),e("i")]),e("div",{class:selectorPrefix+"-text"},[i])]):null}};export default Spin;
//# sourceMappingURL=spin.js.map
