"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var typestyle_1 = require("typestyle");
var __ = { IS_NATIVE__: false };
var Style = (function () {
    function Style(_a) {
        var selector = _a.selector, rules = _a.rules;
        var firstChar = selector[0];
        this.selector = firstChar === '.' || firstChar === '#' ? selector : '.' + selector;
        this.rules = rules;
    }
    return Style;
}());
exports.Style = Style;
var Classes = (function () {
    function Classes(classes) {
        var _this = this;
        Object.entries(classes).forEach(function (_a) {
            var key = _a[0], val = _a[1];
            var selector = __.IS_NATIVE__ ? key : typestyle_1.style(val);
            _this[key] = new Style({
                rules: val,
                selector: selector,
            });
        });
    }
    return Classes;
}());
exports.Classes = Classes;
//const isValidString = param => typeof param === 'string' && param.length > 0
var startsWith = function (str, start) { return str[0] === start; };
//const isValidSelector = param => isValidString(param) && (startsWith(param, '.') || startsWith(param, '#'))
var isStyleObject = function (param) { return param instanceof Style; };
// isSelectorOrStyle = param => isValidString(param) || isStyleObject(param)
var isSelector = function (param) { return typeof param === 'string'; };
var isChildren = Array.isArray;
var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
function parseSelector(selector) {
    var parts = selector.split(classIdSplit);
    var className = [];
    var id = '';
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
        var part = parts_1[_i];
        if (part.startsWith('#'))
            id = part.substring(1);
        else if (part.startsWith('.'))
            className.push(part.substring(1));
    }
    return { id: id, className: className.join(' ') };
}
function createElement(nameOrType, properties, children) {
    if (properties === void 0) { properties = { isRendered: true }; }
    if (children === void 0) { children = []; }
    var isRendered = properties.isRendered, props = __rest(properties, ["isRendered"]);
    if (!isRendered && isRendered !== undefined)
        return null;
    var args = [nameOrType, props];
    if (!Array.isArray(children)) {
        args.push(children);
    }
    else {
        args.push.apply(args, children);
    }
    return React.createElement.apply(React, args);
}
var EmptyObject = {};
// first?: String|Style|Object|Array, second?: Object|Array, third?: Array
var hh = function (nameOrType) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var selector, children, rules;
    var props;
    //let id: String, className: String
    var arg = 0;
    if (isSelector(args[arg])) {
        selector = parseSelector(args[arg]);
        var id = selector.id, className = selector.className;
        arg++;
    }
    else if (isStyleObject(args[arg])) {
        selector = parseSelector(args[arg].selector);
        if (__.IS_NATIVE__) {
            rules = Object.assign({}, args[arg].rules);
        }
        arg++;
    }
    else
        selector = EmptyObject;
    if (typeof args[arg] === 'object' && !isChildren(args[arg])) {
        props = args[arg];
        arg++;
    }
    else
        props = {};
    if (isChildren(args[arg])) {
        children = args[arg];
    }
    if (rules) {
        props.style = __assign({}, rules, (props.style || {}));
    }
    props = __assign({}, props, selector);
    return createElement(nameOrType, props, children);
}; };
exports.hh = hh;
var h = function (nameOrType) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return hh(nameOrType).apply(void 0, rest);
};
exports.h = h;
var createTag = function (h) { return function (tagName) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var first = args[0], rest = args.slice(1);
    if (args.length === 0)
        return h(tagName);
    if (isSelector(first))
        return h.apply(void 0, [tagName + first].concat(rest));
    return h.apply(void 0, [tagName, first].concat(rest));
}; }; };
exports.createTag = createTag;
//# sourceMappingURL=index.js.map