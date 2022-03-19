"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionPropsProps = void 0;
var tslib_1 = require("tslib");
var adherev_ui_conditionalrender_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-conditionalrender"));
var adherev_util_intl_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util-intl"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var Collapse_1 = (0, tslib_1.__importStar)(require("./Collapse"));
var selectorPrefix = 'adherev-ui-playground-functionprops';
exports.functionPropsProps = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, Collapse_1.collapseProps), { data: (0, vue_types_1.array)().def([]) });
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-playground-functionprops',
    props: exports.functionPropsProps,
    setup: function (props, _a) {
        return function () {
            var _collapseProps = {};
            for (var p in Collapse_1.collapseProps) {
                _collapseProps[p] = props[p];
            }
            return (
            // @ts-ignore
            <Collapse_1.default {..._collapseProps}>
          <div 
            // @ts-ignore
            class={selectorPrefix}>
            <table 
            // @ts-ignore
            class={"".concat(selectorPrefix, "-inner")}>
              {props.data.map(function (_a, index) {
                    var name = _a.name, desc = _a.desc, modifier = _a.modifier, params = _a.params, returnType = _a.returnType, returnDesc = _a.returnDesc;
                    return (<>
                  <tr key={"".concat(index)} 
                    // @ts-ignore
                    class={"".concat(selectorPrefix, "-item")}>
                    <td valign="top" 
                    // @ts-ignore
                    class={"".concat(selectorPrefix, "-item-name")}>
                      {/*@ts-ignore*/}
                      <adherev_ui_conditionalrender_1.default conditional={!!modifier}>
                        <span 
                    // @ts-ignore
                    class={"".concat(selectorPrefix, "-modifier")}>
                          {modifier || 'public'} -{' '}
                        </span>
                      </adherev_ui_conditionalrender_1.default>
                      <span 
                    // @ts-ignore
                    class={"".concat(selectorPrefix, "-functionName")}>
                        {name}(
                        <span 
                    // @ts-ignore
                    class={"".concat(selectorPrefix, "-highlight")}>
                          {(params || []).map(function (t) { return t.name; }).join(' , ')}
                        </span>
                        )
                      </span>
                    </td>
                    <td valign="top" 
                    // @ts-ignore
                    class={"".concat(selectorPrefix, "-item-info")}>
                      <div 
                    // @ts-ignore
                    class={"".concat(selectorPrefix, "-item-desc")}>
                        {desc}
                      </div>
                      <dl>
                        <dt 
                    // @ts-ignore
                    class={"".concat(selectorPrefix, "-")}>
                          {adherev_util_intl_1.default.tv('参数说明')}：
                        </dt>
                        <dd>
                          {/*@ts-ignore*/}
                          <adherev_ui_conditionalrender_1.default conditional={!!params && params.length !== 0}>
                            <ul 
                    // @ts-ignore
                    class={"".concat(selectorPrefix, "-level1")}>
                              {params.map(function (param, index) { return (<li key={"".concat(index + 1)}>
                                  <div style={{ marginBottom: 10 }}>
                                    <span 
                        // @ts-ignore
                        class={"".concat(selectorPrefix, "-highlight")}>
                                      {param.name}
                                    </span>{' '}
                                    - {param.desc || '-'}
                                  </div>
                                  <ul 
                        // @ts-ignore
                        class={"".concat(selectorPrefix, "-level2")} style={{ marginBottom: 10 }}>
                                    <li>
                                      {adherev_util_intl_1.default.tv('类型')}
                                      <span 
                        // @ts-ignore
                        class={"".concat(selectorPrefix, "-split")}>
                                        -
                                      </span>
                                      <span 
                        // @ts-ignore
                        class={"".concat(selectorPrefix, "-highlight")}>
                                        {param.type || '-'}
                                      </span>
                                    </li>
                                    <li>
                                      {adherev_util_intl_1.default.tv('默认值')}
                                      <span 
                        // @ts-ignore
                        class={"".concat(selectorPrefix, "-split")}>
                                        -
                                      </span>
                                      <span 
                        // @ts-ignore
                        class={"".concat(selectorPrefix, "-highlight")}>
                                        {param.defaultVal || '-'}
                                      </span>
                                    </li>
                                    <li>
                                      {adherev_util_intl_1.default.tv('是否必填')}
                                      <span 
                        // @ts-ignore
                        class={"".concat(selectorPrefix, "-split")}>
                                        -
                                      </span>
                                      <span 
                        // @ts-ignore
                        class={"".concat(selectorPrefix, "-highlight")}>
                                        {param.required || false ? adherev_util_intl_1.default.tv('是') : adherev_util_intl_1.default.tv('否')}
                                      </span>
                                    </li>
                                  </ul>
                                </li>); })}
                            </ul>
                          </adherev_ui_conditionalrender_1.default>
                        </dd>
                      </dl>
                      <dl>
                        <dt>{adherev_util_intl_1.default.tv('返回值')}：</dt>
                        <dd>
                          <ul 
                    // @ts-ignore
                    class={"".concat(selectorPrefix, "-level1")}>
                            <li>
                              {adherev_util_intl_1.default.tv('类型')}
                              <span 
                    // @ts-ignore
                    class={"".concat(selectorPrefix, "-split")}>
                                -
                              </span>
                              <span 
                    // @ts-ignore
                    class={"".concat(selectorPrefix, "-highlight")}>
                                {returnType || '-'}
                              </span>
                            </li>
                            <li>
                              {adherev_util_intl_1.default.tv('说明')}
                              <span 
                    // @ts-ignore
                    class={"".concat(selectorPrefix, "-split")}>
                                -
                              </span>
                              <span 
                    // @ts-ignore
                    class={"".concat(selectorPrefix, "-highlight")}>
                                {returnDesc || '-'}
                              </span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </td>
                  </tr>
                  {/*@ts-ignore*/}
                  <adherev_ui_conditionalrender_1.default conditional={index !== props.data.length - 1}>
                    <div 
                    // @ts-ignore
                    class={"".concat(selectorPrefix, "-dividing")}/>
                  </adherev_ui_conditionalrender_1.default>
                </>);
                })}
            </table>
          </div>
        </Collapse_1.default>);
        };
    },
});
//# sourceMappingURL=FunctionProps.jsx.map