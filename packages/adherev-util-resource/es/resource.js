import Util from"@baifendian/adherev-util";import Dict from"@baifendian/adherev-util-dict";function initBasicDict(){var t=require.context("./dict",!1,/.*\.(js)$/);t.keys().forEach(function(i){i=t(i).default;i&&Util.isObject(i)&&("initStatic"in i&&Util.isFunction(i.initStatic)&&i.initStatic(),"initRemote"in i&&Util.isFunction(i.initRemote)&&i.initRemote())})}initBasicDict();var Resource={Dict:Dict};export default Resource;
//# sourceMappingURL=resource.js.map