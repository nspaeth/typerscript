"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hh = exports.h = void 0;
var utils_1 = require("./utils");
var parseSelector_1 = require("./parseSelector");
var hHelpers_1 = require("./hHelpers");
/**
 * Instantiates a react component, given an html/svg tag name, or a react component, and the
 * following optional arguments, in order:
 * 1) Styles - Either a `Style` object, or a css selector: '.aClass.bClass'
 * 2) Props object - an object containing props to the component
 * 3) children - a list of instantiated child components
 * @param nameOrType
 * @param _args
 */
function h(nameOrType) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var style = (0, utils_1.isStyleObject)(args[0])
        ? (0, parseSelector_1.parseSelector)(args[0].selector)
        : (0, utils_1.isSelector)(args[0])
            ? (0, parseSelector_1.parseSelector)(args[0])
            : undefined;
    if (args.length === 0)
        return (0, hHelpers_1.h1)(nameOrType, undefined, undefined, undefined);
    if (args.length === 3)
        return (0, hHelpers_1.h1)(nameOrType, style, args[1], args[2]);
    if (!!style)
        return (0, hHelpers_1.h2ArgStyle)(nameOrType, style, args[1]);
    return (0, hHelpers_1.h2ArgProps)(nameOrType, undefined, args[0], args[1]);
}
exports.h = h;
function hh(nameOrType, name) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return h.apply(void 0, __spreadArray([nameOrType], args, false));
    };
    // const displayName = getDisplayName(nameOrType, name)
    // return setDisplayName(
    // 	displayName,
    // 	(...args: hParameters<T, C, S>) =>
    // 		h(
    // 		setDisplayName(displayName, nameOrType),
    // 		...args
    // 	),
    // )
}
exports.hh = hh;
//# sourceMappingURL=h.js.map