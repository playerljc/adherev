"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-ignore
var adherev_ui_space_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-space"));
var vue_1 = require("vue");
var AnchorNavigation_1 = (0, tslib_1.__importStar)(require("../AnchorNavigation"));
var adherev_1 = require("@baifendian/adherev");
var selectPrefix = 'adherev-ui-playground-page';
var playGroundPageProps = (0, tslib_1.__assign)({}, AnchorNavigation_1.anchorNavigationProps);
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-playground-page',
    props: playGroundPageProps,
    setup: function (props, _a) {
        var slots = _a.slots;
        var getAnchors = (0, vue_1.computed)(function () {
            var _a, _b;
            return (_b = (_a = slots
                .default) === null || _a === void 0 ? void 0 : _a.call(slots).filter(function (c) {
                return ['CodeBoxSection', 'adv-playground-page-code-box-section'].some(function (t) {
                    var _a;
                    if (c.type) {
                        if (((_a = adherev_1.Util.isObject) === null || _a === void 0 ? void 0 : _a.call(adherev_1.Util, c.type)) && c.type.name) {
                            return c.type.name === t;
                        }
                        return false;
                    }
                    return false;
                });
            }).map(function (c) {
                var _a, _b, _c;
                return (_c = (_b = (_a = c === null || c === void 0 ? void 0 : c.props) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.map) === null || _c === void 0 ? void 0 : _c.call(_b, function (t) { return ({
                    name: t.name,
                    anchor: t.id,
                }); });
            })) === null || _b === void 0 ? void 0 : _b.flat();
        });
        return function () {
            var _a;
            return (<div 
            // @ts-ignore
            class={selectPrefix}>
        {/*@ts-ignore*/}
        <AnchorNavigation_1.default anchors={getAnchors.value} defaultActiveAnchor={props.defaultActiveAnchor} anchorPosition={props.anchorPosition} scrollEl={props.scrollEl}>
          <adherev_ui_space_1.default.Group direction="vertical">{(_a = slots === null || slots === void 0 ? void 0 : slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)}</adherev_ui_space_1.default.Group>
        </AnchorNavigation_1.default>
      </div>);
        };
    },
});
//# sourceMappingURL=index.jsx.map