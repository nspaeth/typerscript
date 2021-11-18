"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Styles = void 0;
var Style_1 = require("./Style");
var utils_1 = require("../utils");
/**
 * Transforms an object mapping [typestyles selector]: { ...typestyle-css-definitons }
 * into an object mapping [typestyle selector]: `Style` objects.
 * These `Style` objects are used by `h` to
 *   1) Identify arguments that are meant to be css styles
 *   2) Pass typestyle objects to `React.createElement` as human readable classNames
 *
 * @param classes
 */
var Styles = function (classes) {
    return (0, utils_1.mapValues)(classes, 
    // (value, key) => [key, value]
    function (cssProperties, selector) { return Style_1.Style.create([selector, cssProperties]); });
};
exports.Styles = Styles;
/**
 * A helper for creating a Style, populated with a
 */
//# sourceMappingURL=Styling.js.map