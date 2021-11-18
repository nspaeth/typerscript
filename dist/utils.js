"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapValues = exports.mapEntries = exports.fromEntries = exports.entries = exports.isProps = exports.isChildren = exports.isSelector = exports.isStyleObject = exports.filterObject = void 0;
var Styles_1 = require("./Styles");
function filterObject(obj, predicate) {
    return __assign({}, Object.keys(obj)
        .filter(function (key) { return predicate(obj[key], key); })
        .map(function (key) {
        var _a;
        return (_a = {}, _a[key] = obj[key], _a);
    }));
}
exports.filterObject = filterObject;
var isStyleObject = function (param) { return param instanceof Styles_1.Style; };
exports.isStyleObject = isStyleObject;
var isSelector = function (param) { return typeof param === 'string'; };
exports.isSelector = isSelector;
var isChildren = function (param) { return Array.isArray(param); };
exports.isChildren = isChildren;
var isProps = function (param) { return typeof param === 'object' && !(0, exports.isChildren)(param); };
exports.isProps = isProps;
var entries = function (o) { return Object.entries(o); };
exports.entries = entries;
var fromEntries = function (o) { return Object.fromEntries(o); };
exports.fromEntries = fromEntries;
// <Key extends Keys<InO>>
var mapEntries = function (o, fn) {
    return (0, exports.entries)(o)
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return [
            key,
            fn(value, key)
        ];
    });
};
exports.mapEntries = mapEntries;
var mapValues = function (o, fn) {
    return (0, exports.fromEntries)((0, exports.mapEntries)(o, fn));
};
exports.mapValues = mapValues;
// const l = mapEntries({a: 1, b: 2}, (value) => value === 1 ? ['a'] : 2)
// const x = mapValues({ a: 1 }, (value) => 'a')
// type m = typeof x
// const f = fromEntries(x)
// type n = typeof f
//# sourceMappingURL=utils.js.map