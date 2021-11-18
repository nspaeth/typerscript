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
exports.validChildren = exports.css = exports.S = exports.baseStyles = exports.makeProps = exports.styleProp = void 0;
var Styles_1 = require("../Styles");
var h_1 = require("../h");
var material_1 = require("@mui/material");
exports.styleProp = { style: { marginTop: '1px' } };
var makeProps = function (_a) {
    var requiredProps = _a.requiredProps, optionalProps = _a.optionalProps, invalidProps = _a.invalidProps;
    var validProps = __assign(__assign({}, requiredProps), optionalProps);
    // const invalidProps = {
    // 	requiredProp2: 'string',
    // 	requiredProp3: 1,
    // 	optionalProp1: 'string',
    // 	optionalProp2: 1,
    // }
    var extraProp = { extraProp: 1 };
    var wrongProps = __assign(__assign({}, extraProp), invalidProps);
    var wrongValidProps = __assign(__assign({}, wrongProps), validProps);
    var validWrongProps = __assign(__assign({}, validProps), wrongProps);
    return {
        requiredProps: requiredProps,
        optionalProps: optionalProps,
        validProps: validProps,
        invalidProps: invalidProps,
        wrongProps: wrongProps,
        extraProp: extraProp,
        validWrongProps: validWrongProps,
        wrongValidProps: wrongValidProps,
    };
};
exports.makeProps = makeProps;
exports.baseStyles = { Flex: { marginTop: 1 } };
exports.S = (0, Styles_1.Styles)(exports.baseStyles);
exports.css = exports.S.Flex;
exports.validChildren = [
    undefined,
    [],
    ['content'],
    [(0, h_1.h)('div')],
    [(0, h_1.h)(material_1.Box)],
    [(0, h_1.h)(function () { return (0, h_1.h)(material_1.Box); })],
    // [h(() => 'content')],
];
//# sourceMappingURL=mocks.js.map