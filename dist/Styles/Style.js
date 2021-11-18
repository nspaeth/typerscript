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
exports.Style = void 0;
var typestyle_1 = require("typestyle");
/**
 * Encapsulates the name and rules of a typestyle css class into an object in order to
 * 1) Identify it as a CssClass to apply the appropriate class names on the DOM
 * 2) Pass the css rules as style props to React Native components, which don't use css classes
 * TODO: Save memory by not storing the rules when used on the web (might not matter if
 *       this just points to the typestyle object, rather than clones)
 *
 * @typeParam S: An object mapping properties -> rules
 * @typeParam Selector: A string that defines a css selector. Ex: '#someId.someClass.otherClass' or '.aClass'
 */
var Style = /** @class */ (function () {
    function Style(_a) {
        var cssSelector = _a[0], cssProperties = _a[1];
        this.selector = ('.' + (0, typestyle_1.style)(__assign({ $debugName: cssSelector }, cssProperties)));
        this.rules = cssProperties;
    }
    Style.create = function (style) {
        return new Style(style);
    };
    return Style;
}());
exports.Style = Style;
function isIdSelector(selector) {
    return selector[0] === '#';
}
function isClassSelector(selector) {
    return selector[0] === '.';
}
function isSelector(selector) {
    return isIdSelector(selector) || isClassSelector(selector);
}
//# sourceMappingURL=Style.js.map