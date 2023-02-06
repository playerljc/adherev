import Util from"@baifendian/adherev-util";import Intl from"@baifendian/adherev-util-intl";import ConfigProvider from"./configprovider";var withVue=Util._util.withVue;ConfigProvider.install=function(i){i.use(Intl),i.component(ConfigProvider.name,ConfigProvider),withVue(i,"ConfigProvider",ConfigProvider)};export default ConfigProvider;
//# sourceMappingURL=index.js.map
