"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDisplayName = exports.getDisplayName = void 0;
/**
 * Returns the displayname of a component.
 */
var getDisplayName = function (component, name) {
    if (name)
        return name;
    if (typeof component === 'string')
        return component;
    if (!component)
        return 'Empty';
    if (component.displayName)
        return component.displayName;
    if (component.name)
        return component.name;
    // if (component.type) return component.type
    else
        return 'Unknown';
};
exports.getDisplayName = getDisplayName;
var setDisplayName = function (displayName, component) {
    // if (component.displayName)
    // 	console.error(`hh: Overriding name: '${component.displayName}' with '${displayName}'`)
    // if (typeof component === 'string' && component !== displayName)
    // 	console.error(`hh: Overriding name: '${component}' with '${displayName}'`)
    // if (!displayName || displayName === 'Unknown')
    // 	console.error('hh: Unknown', component);
    if (component) {
        component.displayName = displayName;
        // component.name = displayName;
    }
    else {
        console.warn('Undefined component!');
    }
    // component.whyDidYouRender = true
    return component;
};
exports.setDisplayName = setDisplayName;
//# sourceMappingURL=displayNames.js.map