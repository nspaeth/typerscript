"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function h(el, props, context) {
    return (0, react_1.createElement)(el, props);
}
function hh(el) {
    return function (props, _context) { return h(el, props); };
}
function make() {
    var creator = hh;
    h('div');
    h('div', {});
    h('div', { tabIndex: 2 });
    h('div', { tabIndex: 2, blah: 1 }); // Should error
    h(function (_a) {
        var why = _a.why, order = _a.order;
        return h('div', { role: why, tabIndex: order });
    });
    var div = creator('div');
    div({});
    div({ tabIndex: 1 });
    div({ blah: 1 }); // Should error
    var divHelper = creator(function (_a) {
        var why = _a.why, order = _a.order;
        return div({ role: why, tabIndex: order });
    });
    divHelper();
    divHelper({}); // should error
    divHelper({ order: 1 });
    divHelper({ order: 1, asfd: 3 }); // Should error
}
//# sourceMappingURL=more.js.map