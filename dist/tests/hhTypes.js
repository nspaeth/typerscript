"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fn = exports.RequiredPropFn = exports.OptionalPropFn = exports.NoPropFn = void 0;
var h_1 = require("../h");
var material_1 = require("@mui/material");
var mocks_1 = require("./mocks");
var div = (0, h_1.hh)('div');
// Intrinsic element
mocks_1.validChildren.forEach(function (children) {
    var _a = (0, mocks_1.makeProps)({
        optionalProps: { tabIndex: 2 },
        requiredProps: {},
        invalidProps: { tabIndex: 'invalid' },
    }), validProps = _a.validProps, optionalProps = _a.optionalProps, invalidProps = _a.invalidProps, extraProp = _a.extraProp, wrongProps = _a.wrongProps, validWrongProps = _a.validWrongProps, wrongValidProps = _a.wrongValidProps;
    div();
    div(children);
    div(optionalProps, children);
    div(mocks_1.styleProp, children);
    // there are no required props on div
    // TODO: use an IntrinsicElement that has a required prop, if any exist
    // div(requiredProps, children)
    div(mocks_1.css);
    div(mocks_1.css, children);
    div(mocks_1.css, optionalProps, children);
    div(mocks_1.css, mocks_1.styleProp, children);
    // @ts-expect-error
    div(extraProp, children);
    // @ts-expect-error
    div(invalidProp, children);
    // @ts-expect-error
    div(wrongProps, children);
    // @ts-expect-error
    div(validWrongProps, children); // Should error; has extra prop, and wrong prop type
    // @ts-expect-error
    div(wrongValidProps, children); // Should error; has extra prop
    // @ts-expect-error
    div(mocks_1.css, extraProp, children);
    // @ts-expect-error
    div(mocks_1.css, invalidProp, children);
    // @ts-expect-error
    div(mocks_1.css, wrongProps, children);
    // @ts-expect-error
    div(mocks_1.css, validWrongProps, children); // Should error; has extra prop, and wrong prop type
    // @ts-expect-error
    div(mocks_1.css, wrongValidProps, children); // Should error; has extra prop
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
exports.OptionalPropFn = (0, h_1.hh)(function (_a) {
    var optionalProp = _a.optionalProp;
    return (0, h_1.h)('div', { tabIndex: optionalProp });
});
mocks_1.validChildren.forEach(function (children) {
    var _a = (0, mocks_1.makeProps)({
        optionalProps: { optionalProp: 2 },
        invalidProps: { optionalProp: 'string' },
        requiredProps: {},
    }), requiredProps = _a.requiredProps, optionalProps = _a.optionalProps, validProps = _a.validProps, invalidProps = _a.invalidProps, wrongProps = _a.wrongProps, extraProp = _a.extraProp, validWrongProps = _a.validWrongProps, wrongValidProps = _a.wrongValidProps;
    (0, exports.OptionalPropFn)();
    (0, exports.OptionalPropFn)(mocks_1.css);
    (0, exports.OptionalPropFn)(children);
    (0, exports.OptionalPropFn)(optionalProps, children);
    (0, exports.OptionalPropFn)(mocks_1.css, children);
    (0, exports.OptionalPropFn)(mocks_1.css, optionalProps, children);
    // @ts-expect-error
    (0, exports.OptionalPropFn)(extraProp, children);
    // @ts-expect-error
    (0, exports.OptionalPropFn)(invalidProp, children);
    // @ts-expect-error
    (0, exports.OptionalPropFn)(wrongProps, children);
    // @ts-expect-error
    (0, exports.OptionalPropFn)(validWrongProps, children); // Should error; Has extra prop and wrong type
    // @ts-expect-error
    (0, exports.OptionalPropFn)(wrongValidProps, children); // Should error; Has extra prop
    // @ts-expect-error
    (0, exports.OptionalPropFn)(mocks_1.css, extraProp, children);
    // @ts-expect-error
    (0, exports.OptionalPropFn)(mocks_1.css, invalidProp, children);
    // @ts-expect-error
    (0, exports.OptionalPropFn)(mocks_1.css, wrongProps, children);
    // @ts-expect-error
    (0, exports.OptionalPropFn)(mocks_1.css, validWrongProps, children); // Should error; Has extra prop and wrong type
    // @ts-expect-error
    (0, exports.OptionalPropFn)(mocks_1.css, wrongValidProps, children); // Should error; Has extra prop
});
exports.RequiredPropFn = (0, h_1.hh)(function (_a) {
    var requiredProp = _a.requiredProp;
    return (0, h_1.h)('div', { title: requiredProp });
});
mocks_1.validChildren.forEach(function (children) {
    var _a = (0, mocks_1.makeProps)({
        requiredProps: { requiredProp: 'title' },
        invalidProps: { requiredProp: 0 },
        optionalProps: {}
    }), requiredProps = _a.requiredProps, optionalProps = _a.optionalProps, validProps = _a.validProps, invalidProps = _a.invalidProps, wrongProps = _a.wrongProps, extraProp = _a.extraProp, validWrongProps = _a.validWrongProps, wrongValidProps = _a.wrongValidProps;
    (0, exports.RequiredPropFn)(requiredProps);
    (0, exports.RequiredPropFn)(mocks_1.css, requiredProps);
    (0, exports.RequiredPropFn)(requiredProps, children);
    (0, exports.RequiredPropFn)(mocks_1.css, requiredProps, children);
    // @ts-expect-error
    (0, exports.RequiredPropFn)(children);
    // @ts-expect-error
    (0, exports.RequiredPropFn)(mocks_1.css, children);
    // @ts-expect-error
    (0, exports.RequiredPropFn)(extraProp, children);
    // @ts-expect-error
    (0, exports.RequiredPropFn)(invalidProp, children);
    // @ts-expect-error
    (0, exports.RequiredPropFn)(wrongProps, children);
    // @ts-expect-error
    (0, exports.RequiredPropFn)(validWrongProps, children); // Should error; Has extra prop and wrong type
    // @ts-expect-error
    (0, exports.RequiredPropFn)(wrongValidProps, children); // Should error; Has extra prop
    // @ts-expect-error
    (0, exports.RequiredPropFn)(mocks_1.css);
    // @ts-expect-error
    (0, exports.RequiredPropFn)(mocks_1.css, extraProp, children);
    // @ts-expect-error
    (0, exports.RequiredPropFn)(mocks_1.css, invalidProp, children);
    // @ts-expect-error
    (0, exports.RequiredPropFn)(mocks_1.css, wrongProps, children);
    // @ts-expect-error
    (0, exports.RequiredPropFn)(mocks_1.css, validWrongProps, children); // Should error; Has extra prop and wrong type
    // @ts-expect-error
    (0, exports.RequiredPropFn)(mocks_1.css, wrongValidProps, children); // Should error; Has extra prop
});
exports.Fn = (0, h_1.hh)(function (_a) {
    var requiredProp = _a.requiredProp, optionalProp = _a.optionalProp;
    return (0, h_1.h)('div', { tabIndex: optionalProp, title: requiredProp });
});
mocks_1.validChildren.forEach(function (children) {
    var _a = (0, mocks_1.makeProps)({
        optionalProps: { optionalProp: 1 },
        requiredProps: { requiredProp: 'title' },
        invalidProps: { requiredProp: 0 },
    }), requiredProps = _a.requiredProps, optionalProps = _a.optionalProps, validProps = _a.validProps, invalidProps = _a.invalidProps, wrongProps = _a.wrongProps, extraProp = _a.extraProp, validWrongProps = _a.validWrongProps, wrongValidProps = _a.wrongValidProps;
    (0, exports.Fn)(requiredProps, children);
    (0, exports.Fn)(validProps, children);
    (0, exports.Fn)(mocks_1.css, requiredProps, children);
    (0, exports.Fn)(mocks_1.css, validProps, children);
    // @ts-expect-error
    (0, exports.Fn)(children);
    // @ts-expect-error
    (0, exports.Fn)(optionalProps, children);
    // @ts-expect-error
    (0, exports.Fn)(mocks_1.styleProp, children);
    // @ts-expect-error
    (0, exports.Fn)(mocks_1.css, children);
    // @ts-expect-error
    (0, exports.Fn)(mocks_1.css, optionalProps, children);
    // @ts-expect-error
    (0, exports.Fn)(mocks_1.css, mocks_1.styleProp, children);
    // @ts-expect-error
    (0, exports.Fn)(extraProp, children);
    // @ts-expect-error
    (0, exports.Fn)(invalidProp, children);
    // @ts-expect-error
    (0, exports.Fn)(wrongProps, children);
    // @ts-expect-error
    (0, exports.Fn)(validWrongProps, children); // Should error; Has extra prop and wrong type
    // @ts-expect-error
    (0, exports.Fn)(mocks_1.css, wrongValidProps, children); // Should error; Has extra prop
    // @ts-expect-error
    (0, exports.Fn)(mocks_1.css);
    // @ts-expect-error
    (0, exports.Fn)(mocks_1.css, extraProp, children);
    // @ts-expect-error
    (0, exports.Fn)(mocks_1.css, invalidProp, children);
    // @ts-expect-error
    (0, exports.Fn)(mocks_1.css, wrongProps, children);
    // @ts-expect-error
    (0, exports.Fn)(mocks_1.css, validWrongProps, children); // Should error; Has extra prop and wrong type
    // @ts-expect-error
    (0, exports.Fn)(mocks_1.css, wrongValidProps, children); // Should error; Has extra prop
});
// Class Component
var Box = (0, h_1.hh)(material_1.Box, 'Box');
mocks_1.validChildren.forEach(function (children) {
    var _a = (0, mocks_1.makeProps)({
        optionalProps: { optionalProp: 1 },
        requiredProps: { requiredProp: 'title' },
        invalidProps: { requiredProp: 0 },
    }), requiredProps = _a.requiredProps, optionalProps = _a.optionalProps, validProps = _a.validProps, invalidProps = _a.invalidProps, wrongProps = _a.wrongProps, extraProp = _a.extraProp, validWrongProps = _a.validWrongProps, wrongValidProps = _a.wrongValidProps;
    Box(mocks_1.styleProp, children);
    Box(children);
    Box(mocks_1.css, children);
    Box(mocks_1.css, mocks_1.styleProp, children);
    Box(mocks_1.css);
    // Box(requiredProps, children)
    // Box(validProps, children)
    // Box(css, requiredProps, children)
    // Box(css, validProps, children)
    // @ts-expect-error
    Box(optionalProps, children);
    // @ts-expect-error
    Box(mocks_1.css, optionalProps, children);
    // @ts-expect-error
    Box(extraProp, children);
    // @ts-expect-error
    Box(invalidProp, children);
    // @ts-expect-error
    Box(wrongProps, children);
    // @ts-expect-error
    Box(validWrongProps, children); // Should error; Has extra prop and wrong type
    // @ts-expect-error
    Box(mocks_1.css, wrongValidProps, children); // Should error; Has extra prop
    // @ts-expect-error
    Box(mocks_1.css, extraProp, children);
    // @ts-expect-error
    Box(mocks_1.css, invalidProp, children);
    // @ts-expect-error
    Box(mocks_1.css, wrongProps, children);
    // @ts-expect-error
    Box(mocks_1.css, validWrongProps, children); // Should error; Has extra prop and wrong type
    // @ts-expect-error
    Box(mocks_1.css, wrongValidProps, children); // Should error; Has extra prop
});
//# sourceMappingURL=hhTypes.js.map