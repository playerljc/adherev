import _Modal from"ant-design-vue/es/modal";import Resource from"@baifendian/adherev-util-resource";import{HOC,assignAttrs}from"../util";var Wrap=HOC(_Modal,{functional:!0,inject:["getEl"],render:function(e,r){return assignAttrs(_Modal,r,Wrap.defaultProps),e(_Modal,r.data,r.children)}});Wrap.defaultProps={closable:!0,centered:!0,maskClosable:!0,destroyOnClose:!0,zIndex:Resource.Dict.value.ResourceNormalMaxZIndex.value};export default Wrap;
//# sourceMappingURL=Modal.js.map
