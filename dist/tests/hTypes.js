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
exports.Fn = exports.RequiredPropFn = exports.OptionalPropFn = exports.NoPropFn = void 0;
var h_1 = require("../h");
var mocks_1 = require("./mocks");
// Intrinsic element
mocks_1.validChildren.forEach(function (children) {
    var _a = (0, mocks_1.makeProps)({
        optionalProps: { tabIndex: 2 },
        requiredProps: {},
        invalidProps: { tabIndex: 'invalid' },
    }), validProps = _a.validProps, optionalProps = _a.optionalProps, invalidProps = _a.invalidProps, extraProp = _a.extraProp, wrongProps = _a.wrongProps, validWrongProps = _a.validWrongProps, wrongValidProps = _a.wrongValidProps;
    (0, h_1.h)('div');
    (0, h_1.h)('div', children);
    (0, h_1.h)('div', optionalProps, children);
    (0, h_1.h)('div', mocks_1.styleProp, children);
    // there are no required props on div
    // TODO: use an IntrinsicElement that has a required prop, if any exist
    // h('div', requiredProps, children)
    (0, h_1.h)('div', mocks_1.css);
    (0, h_1.h)('div', mocks_1.css, children);
    (0, h_1.h)('div', mocks_1.css, optionalProps, children);
    (0, h_1.h)('div', mocks_1.css, mocks_1.styleProp, children);
    // @ts-expect-error
    (0, h_1.h)('div', extraProp, children);
    // @ts-expect-error
    (0, h_1.h)('div', invalidProp, children);
    // @ts-expect-error
    (0, h_1.h)('div', wrongProps, children);
    // @ts-expect-error
    (0, h_1.h)('div', validWrongProps, children); // Should error; has extra prop, and wrong prop type
    // @ts-expect-error
    (0, h_1.h)('div', wrongValidProps, children); // Should error; has extra prop
    // @ts-expect-error
    (0, h_1.h)('div', mocks_1.css, extraProp, children);
    // @ts-expect-error
    (0, h_1.h)('div', mocks_1.css, invalidProp, children);
    // @ts-expect-error
    (0, h_1.h)('div', mocks_1.css, wrongProps, children);
    // @ts-expect-error
    (0, h_1.h)('div', mocks_1.css, validWrongProps, children); // Should error; has extra prop, and wrong prop type
    // @ts-expect-error
    (0, h_1.h)('div', mocks_1.css, wrongValidProps, children); // Should error; has extra prop
});
// Function component w/no props
var NoPropFn = function () { return (0, h_1.h)('div'); };
exports.NoPropFn = NoPropFn;
mocks_1.validChildren.forEach(function (children) {
    var extraProp = { invalidProp: 1 };
    (0, h_1.h)(exports.NoPropFn, mocks_1.css);
    (0, h_1.h)(exports.NoPropFn, children);
    (0, h_1.h)(exports.NoPropFn, mocks_1.css, children);
    // @ts-expect-error
    (0, h_1.h)(exports.NoPropFn, extraProp);
    // @ts-expect-error
    (0, h_1.h)(exports.NoPropFn, extraProp, children);
    // @ts-expect-error
    (0, h_1.h)(exports.NoPropFn, mocks_1.css, extraProp);
    // @ts-expect-error
    (0, h_1.h)(exports.NoPropFn, mocks_1.css, extraProp, children);
});
var OptionalPropFn = function (_a) {
    var optionalProp = _a.optionalProp;
    return (0, h_1.h)('div', { tabIndex: optionalProp });
};
exports.OptionalPropFn = OptionalPropFn;
mocks_1.validChildren.forEach(function (children) {
    var _a = (0, mocks_1.makeProps)({
        optionalProps: { optionalProp: 2 },
        invalidProps: { optionalProp: 'string' },
        requiredProps: {},
    }), requiredProps = _a.requiredProps, optionalProps = _a.optionalProps, validProps = _a.validProps, invalidProps = _a.invalidProps, wrongProps = _a.wrongProps, extraProp = _a.extraProp, validWrongProps = _a.validWrongProps, wrongValidProps = _a.wrongValidProps;
    (0, h_1.h)(exports.OptionalPropFn);
    (0, h_1.h)(exports.OptionalPropFn, mocks_1.css);
    (0, h_1.h)(exports.OptionalPropFn, children);
    (0, h_1.h)(exports.OptionalPropFn, optionalProps, children);
    (0, h_1.h)(exports.OptionalPropFn, mocks_1.css, children);
    (0, h_1.h)(exports.OptionalPropFn, mocks_1.css, optionalProps, children);
    // @ts-expect-error
    (0, h_1.h)(exports.OptionalPropFn, extraProp, children);
    // @ts-expect-error
    (0, h_1.h)(exports.OptionalPropFn, invalidProp, children);
    // @ts-expect-error
    (0, h_1.h)(exports.OptionalPropFn, wrongProps, children);
    // @ts-expect-error
    (0, h_1.h)(exports.OptionalPropFn, validWrongProps, children); // Should error; Has extra prop and wrong type
    // @ts-expect-error
    (0, h_1.h)(exports.OptionalPropFn, wrongValidProps, children); // Should error; Has extra prop
    // @ts-expect-error
    (0, h_1.h)(exports.OptionalPropFn, mocks_1.css, extraProp, children);
    // @ts-expect-error
    (0, h_1.h)(exports.OptionalPropFn, mocks_1.css, invalidProp, children);
    // @ts-expect-error
    (0, h_1.h)(exports.OptionalPropFn, mocks_1.css, wrongProps, children);
    // @ts-expect-error
    (0, h_1.h)(exports.OptionalPropFn, mocks_1.css, validWrongProps, children); // Should error; Has extra prop and wrong type
    // @ts-expect-error
    (0, h_1.h)(exports.OptionalPropFn, mocks_1.css, wrongValidProps, children); // Should error; Has extra prop
});
var RequiredPropFn = function (_a) {
    var requiredProp = _a.requiredProp;
    return (0, h_1.h)('div', { title: requiredProp });
};
exports.RequiredPropFn = RequiredPropFn;
mocks_1.validChildren.forEach(function (children) {
    var _a = (0, mocks_1.makeProps)({
        requiredProps: { requiredProp: 'title' },
        invalidProps: { requiredProp: 'invalid' },
        optionalProps: {}
    }), requiredProps = _a.requiredProps, optionalProps = _a.optionalProps, validProps = _a.validProps, invalidProps = _a.invalidProps, wrongProps = _a.wrongProps, extraProp = _a.extraProp, validWrongProps = _a.validWrongProps, wrongValidProps = _a.wrongValidProps;
    (0, h_1.h)(exports.RequiredPropFn, requiredProps);
    (0, h_1.h)(exports.RequiredPropFn, mocks_1.css, requiredProps);
    (0, h_1.h)(exports.RequiredPropFn, requiredProps, children);
    (0, h_1.h)(exports.RequiredPropFn, mocks_1.css, requiredProps, children);
    // @ts-expect-error
    (0, h_1.h)(exports.RequiredPropFn, children);
    // @ts-expect-error
    (0, h_1.h)(exports.RequiredPropFn, mocks_1.css, children);
    // @ts-expect-error
    (0, h_1.h)(exports.RequiredPropFn, extraProp, children);
    // @ts-expect-error
    (0, h_1.h)(exports.RequiredPropFn, invalidProp, children);
    // @ts-expect-error
    (0, h_1.h)(exports.RequiredPropFn, wrongProps, children);
    // @ts-expect-error
    (0, h_1.h)(exports.RequiredPropFn, validWrongProps, children); // Should error; Has extra prop and wrong type
    // @ts-expect-error
    (0, h_1.h)(exports.RequiredPropFn, wrongValidProps, children); // Should error; Has extra prop
    // @ts-expect-error
    (0, h_1.h)(exports.RequiredPropFn, mocks_1.css);
    // @ts-expect-error
    (0, h_1.h)(exports.RequiredPropFn, mocks_1.css, extraProp, children);
    // @ts-expect-error
    (0, h_1.h)(exports.RequiredPropFn, mocks_1.css, invalidProp, children);
    // @ts-expect-error
    (0, h_1.h)(exports.RequiredPropFn, mocks_1.css, wrongProps, children);
    // @ts-expect-error
    (0, h_1.h)(exports.RequiredPropFn, mocks_1.css, validWrongProps, children); // Should error; Has extra prop and wrong type
    // @ts-expect-error
    (0, h_1.h)(exports.RequiredPropFn, mocks_1.css, wrongValidProps, children); // Should error; Has extra prop
});
var Fn = function (_a) {
    var requiredProp = _a.requiredProp, optionalProp = _a.optionalProp;
    return (0, h_1.h)('div', { title: requiredProp, tabIndex: optionalProp });
};
exports.Fn = Fn;
mocks_1.validChildren.forEach(function (children) {
    var _a = (0, mocks_1.makeProps)({
        optionalProps: { optionalProp: 1 },
        requiredProps: { requiredProp: 'title' },
        invalidProps: { requiredProp: 1 },
    }), requiredProps = _a.requiredProps, optionalProps = _a.optionalProps, validProps = _a.validProps, invalidProps = _a.invalidProps, wrongProps = _a.wrongProps, extraProp = _a.extraProp, validWrongProps = _a.validWrongProps, wrongValidProps = _a.wrongValidProps;
    (0, h_1.h)(exports.Fn, requiredProps, children);
    // @ts-expect-error
    (0, h_1.h)(exports.Fn, children);
    // @ts-expect-error
    (0, h_1.h)(exports.Fn, optionalProps, children);
    // @ts-expect-error
    (0, h_1.h)(exports.Fn, mocks_1.styleProp, children);
    // @ts-expect-error
    (0, h_1.h)(exports.Fn, mocks_1.css, children);
    // @ts-expect-error
    (0, h_1.h)(exports.Fn, mocks_1.css, optionalProps, children);
    // @ts-expect-error
    (0, h_1.h)(exports.Fn, mocks_1.css, mocks_1.styleProp, children);
    // @ts-expect-error
    (0, h_1.h)(exports.Fn, extraProp, children);
    // @ts-expect-error
    (0, h_1.h)(exports.Fn, invalidProp, children);
    // @ts-expect-error
    (0, h_1.h)(exports.Fn, wrongProps, children);
    // @ts-expect-error
    (0, h_1.h)(exports.Fn, validWrongProps, children); // Should error; Has extra prop and wrong type
    // @ts-expect-error
    (0, h_1.h)(exports.Fn, wrongValidProps, children); // Should error; Has extra prop
    // @ts-expect-error
    (0, h_1.h)(exports.Fn, mocks_1.css);
    // @ts-expect-error
    (0, h_1.h)(exports.Fn, mocks_1.css, extraProp, children);
    // @ts-expect-error
    (0, h_1.h)(exports.Fn, mocks_1.css, invalidProp, children);
    // @ts-expect-error
    (0, h_1.h)(exports.Fn, mocks_1.css, wrongProps, children);
    // @ts-expect-error
    (0, h_1.h)(exports.Fn, mocks_1.css, validWrongProps, children); // Should error; Has extra prop and wrong type
    // @ts-expect-error
    (0, h_1.h)(exports.Fn, mocks_1.css, wrongValidProps, children); // Should error; Has extra prop
});
// Class Component
mocks_1.validChildren.forEach(function (children) {
    (0, h_1.h)('div', children);
    (0, h_1.h)('div', optionalProps, children);
    (0, h_1.h)('div', mocks_1.styleProp, children);
    (0, h_1.h)('div', requiredProps, children);
    (0, h_1.h)('div', mocks_1.css, children);
    (0, h_1.h)('div', mocks_1.css, optionalProps, children);
    (0, h_1.h)('div', mocks_1.css, mocks_1.styleProp, children);
    // @ts-expect-error
    (0, h_1.h)('div', extraProp, children);
    // @ts-expect-error
    (0, h_1.h)('div', invalidProp, children);
    // @ts-expect-error
    (0, h_1.h)('div', __assign(__assign({}, invalidProp), extraProp), children);
    // @ts-expect-error
    (0, h_1.h)('div', validWrongProps, children);
    // @ts-expect-error
    (0, h_1.h)('div', mocks_1.css);
    // @ts-expect-error
    (0, h_1.h)('div', mocks_1.css, extraProp, children);
    // @ts-expect-error
    (0, h_1.h)('div', mocks_1.css, invalidProp, children);
    // @ts-expect-error
    (0, h_1.h)('div', mocks_1.css, __assign(__assign({}, invalidProp), extraProp), children);
    // @ts-expect-error
    (0, h_1.h)('div', mocks_1.css, validWrongProps, children);
});
//# sourceMappingURL=hTypes.js.map