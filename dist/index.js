"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClasses = exports.hh = exports.h = exports.Style = exports.Styles = void 0;
// import { IClass, Styling, Style } from './createClass'
var Styles_1 = require("./Styles");
Object.defineProperty(exports, "Styles", { enumerable: true, get: function () { return Styles_1.Styles; } });
Object.defineProperty(exports, "Style", { enumerable: true, get: function () { return Styles_1.Style; } });
var h_1 = require("./h");
Object.defineProperty(exports, "h", { enumerable: true, get: function () { return h_1.h; } });
Object.defineProperty(exports, "hh", { enumerable: true, get: function () { return h_1.hh; } });
var Styles_2 = require("./Styles");
exports.createClasses = Styles_2.Styles;
// This avoids allocating new empty objects all the time
var EmptyObject = Object.freeze({});
var objIsLocked = function (obj) {
    return !Object.isExtensible(obj) || Object.isFrozen(obj) || Object.isSealed(obj);
};
var startsWith = function (str, start) { return str[0] === start; };
// const isValidString = param => typeof param === 'string' && param.length > 0
// const isValidSelector = param => isValidString(param) && (startsWith(param, '.') || startsWith(param, '#'))
// isSelectorOrStyle = param => isValidString(param) || isStyleObject(param)
// const Styling = <T extends IClass>(styles: T) => Styling<T>(styles)
//# sourceMappingURL=index.js.map