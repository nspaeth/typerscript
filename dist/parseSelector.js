"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSelector = void 0;
var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
/**
 * Parse class names and id from a selector string.
 *
 * ex: (selector: '#someId.someClass.otherClass') => ({ id: 'someId', className: 'someClass otherClass'})
 */
function parseSelector(selector) {
    var parts = selector.split(classIdSplit);
    var classNames = [];
    var id;
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
        var part = parts_1[_i];
        if (part.startsWith('#'))
            id = part.substring(1);
        else if (part.startsWith('.'))
            classNames.push(part.substring(1));
    }
    var className = classNames.join(' ');
    if (id && className) {
        return { id: id, className: className };
    }
    if (id) {
        return { id: id };
    }
    if (className) {
        return { className: className };
    }
    return undefined;
}
exports.parseSelector = parseSelector;
//# sourceMappingURL=parseSelector.js.map