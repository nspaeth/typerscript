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
exports.h2ArgStyle = exports.h2ArgProps = exports.h1 = void 0;
var react_1 = require("react");
var utils_1 = require("./utils");
// TODO: memoize
var propsWithSelectors = function (style, props) {
    if (style) {
        // TODO: merge via concat className
        if (props)
            return __assign(__assign({}, style), props);
        return style;
    }
    return props;
};
var EmptyArray = [];
function h1(name, style, props, children) {
    var _a;
    if (children === void 0) { children = EmptyArray; }
    // let reactProps = !!style ? { ...style, ...props } : Props
    var reactProps = (_a = propsWithSelectors(style, props)) !== null && _a !== void 0 ? _a : null;
    // if (!!style) {
    // 	// const props = !!selector ? { ...selector, ...Props } : Props
    // 	// TODO: memoize for perf
    // 	if (!!props) return createElement(name, { ...style, ...props }, ...children)
    // 	else return createElement(name, style as any, ...children)
    // }
    return react_1.createElement.apply(void 0, __spreadArray([name,
        reactProps], children, false));
}
exports.h1 = h1;
function h2ArgProps(name, selector, propsOrChildren, children) {
    if ((0, utils_1.isChildren)(propsOrChildren))
        return h1(name, selector, null, propsOrChildren);
    return h1(name, selector, propsOrChildren, children);
}
exports.h2ArgProps = h2ArgProps;
function h2ArgStyle(name, selector) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (args.length > 0)
        return h2ArgProps.apply(void 0, __spreadArray([name, selector], args, false));
    return h1(name, selector, undefined, undefined);
}
exports.h2ArgStyle = h2ArgStyle;
// function createElement():  {
// 		let selector: Selector, children: any[], rules: object
// 		let props: {[index:string]: any}
// 		//let id: String, className: String
// 		let arg = 0
// 		if (isSelector(args[arg])) {
// 			selector = parseSelector(args[arg])
// 			const { id, className } = selector
// 			arg++
// 		} else if (isStyleObject(args[arg])) {
// 			selector = parseSelector(args[arg].selector)
// 			if (__.IS_NATIVE__) {
// 				rules = Object.assign({}, args[arg].rules)
// 			}
// 			arg++
// 		} else selector = EmptyObject
// 		if (typeof args[arg] === 'object' && !isChildren(args[arg])) {
// 			// Is context object
// 			props = args[arg]
// 			arg++
// 		} else props = {} as T
// 		children = args[arg]
// 		if (rules) {
// 			props.style = { ...rules, ...(props.style || {}) }
// 		}
// 		props = { ...props, ...selector }
// 		return React.createElement(nameOrType, props, children)
// 	}
//# sourceMappingURL=hHelpers.js.map