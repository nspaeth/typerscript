"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Styles } from './createClass'
var Styles_1 = require("./Styles");
var h_1 = require("./h");
var material_1 = require("@mui/material");
var baseStyles = {
    Flex: { marginTop: 1 }
};
var S = (0, Styles_1.Styles)(baseStyles);
function make() {
    var div = (0, h_1.hh)('div');
    var divHelper = (0, h_1.hh)(function (_a) {
        var optionalProp = _a.optionalProp, requiredProp = _a.requiredProp;
        return div({ role: optionalProp, tabIndex: requiredProp });
    });
    // Should not error
    (0, h_1.h)('div');
    (0, h_1.h)('div', S.Flex);
    (0, h_1.h)('div', { tabIndex: 2 });
    (0, h_1.h)('div', S.Flex, { tabIndex: 2, });
    (0, h_1.h)(function (_a) {
        var optionalProp = _a.optionalProp, requiredProp = _a.requiredProp;
        return (0, h_1.h)('div', { role: optionalProp, tabIndex: requiredProp });
    }, { requiredProp: 1 });
    div({});
    div({ tabIndex: 1 });
    div(S.Flex, {});
    div(S.Flex, { tabIndex: 1 });
    divHelper({ requiredProp: 1, });
    divHelper(S.Flex, { requiredProp: 1 });
    (0, h_1.h)('div', []);
    (0, h_1.h)('div', S.Flex, []);
    (0, h_1.h)('div', { tabIndex: 2 }, []);
    (0, h_1.h)('div', S.Flex, { tabIndex: 2, }, []);
    (0, h_1.h)(function (_a) {
        var optionalProp = _a.optionalProp, requiredProp = _a.requiredProp;
        return (0, h_1.h)('div', { role: optionalProp, tabIndex: requiredProp });
    }, { requiredProp: 1 }, []);
    div({}, []);
    div({ tabIndex: 1 }, []);
    div(S.Flex, {}, []);
    div(S.Flex, { tabIndex: 1 }, []);
    divHelper({ requiredProp: 1, }, []);
    divHelper(S.Flex, { requiredProp: 1 }, []);
    // @ts-expect-error
    (0, h_1.h)('div', { badProp: 1 }); // has invalid prop - thinks it is a style?
    // @ts-expect-error
    (0, h_1.h)('div', S.Flex, { badProp: 1 });
    // @ts-expect-error
    (0, h_1.h)('div', S.Flex, { tabIndex: 2, badProp: 1 }); // wrong spot
    // @ts-expect-error
    div({ blah: 1 });
    // @ts-expect-error
    div({ tabIndex: 1, blah: 1 }); // wrong spot
    // @ts-expect-error
    div(S.Flex, { blah: 1 });
    // @ts-expect-error
    div(S.Flex, { tabIndex: 1, blah: 1 });
    // @ts-expect-error
    (0, h_1.h)(function (_a) {
        var optionalProp = _a.optionalProp, requiredProp = _a.requiredProp;
        return (0, h_1.h)('div', { role: optionalProp, tabIndex: requiredProp });
    });
    // @ts-expect-error
    divHelper();
    // @ts-expect-error
    divHelper({});
    // @ts-expect-error
    divHelper({ badProp: 3 });
    // @ts-expect-error
    divHelper({ requiredProp: 1, badProp: 3 });
    // @ts-expect-error
    divHelper(S.Flex, { badProp: 3 }); // wrong spot
    // @ts-expect-error
    divHelper(S.Flex, { requiredProp: 1, badProp: 3 }); // wrong spot
    // @ts-expect-error
    (0, h_1.h)('div', { badProp: 1 }, []);
    // @ts-expect-error
    (0, h_1.h)('div', S.Flex, { badProp: 1 }, []);
    // @ts-expect-error
    (0, h_1.h)('div', S.Flex, { tabIndex: 2, badProp: 1 }, []);
    // @ts-expect-error
    (0, h_1.h)(function (_a) {
        var optionalProp = _a.optionalProp, requiredProp = _a.requiredProp;
        return (0, h_1.h)('div', { role: optionalProp, tabIndex: requiredProp }, []);
    });
    // @ts-expect-error
    div({ blah: 1 }, []);
    // @ts-expect-error
    div({ tabIndex: 1, blah: 1 }, []);
    // @ts-expect-error
    div(S.Flex, { blah: 1 }, []);
    // @ts-expect-error
    div(S.Flex, { tabIndex: 1, blah: 1 }, []);
    // @ts-expect-error
    divHelper([]);
    // @ts-expect-error
    divHelper({}, []);
    // @ts-expect-error
    divHelper({ badProp: 3 }, []);
    // @ts-expect-error
    divHelper({ requiredProp: 1, badProp: 3 }, []);
    // @ts-expect-error
    divHelper(S.Flex, { badProp: 3 }, []);
    // @ts-expect-error
    divHelper(S.Flex, { requiredProp: 1, badProp: 3 }, []);
    var Box = (0, h_1.hh)(material_1.Box, 'Box');
    Box({});
}
var hHelpers_1 = require("./hHelpers");
// should not allow unrecognized props
// should require mandatory props
// Using native element
(0, hHelpers_1.h1)('div');
// @ts-expect-error
(0, hHelpers_1.h1)('div', {});
(0, hHelpers_1.h1)('div', undefined, { tabIndex: 1 });
// @ts-expect-error
(0, hHelpers_1.h1)('div', {}, { badProp: 1 }); // should error
// @ts-expect-error
(0, hHelpers_1.h1)('div', {}, { tabIndex: 1, badProp: 1 }); // should error
(0, hHelpers_1.h2ArgProps)('div', undefined);
(0, hHelpers_1.h2ArgProps)('div', {});
(0, hHelpers_1.h2ArgProps)('div', {}, {});
(0, hHelpers_1.h2ArgProps)('div', undefined, { tabIndex: 1, });
// @ts-expect-error
(0, hHelpers_1.h2ArgProps)('div', undefined, { badProp: 1 }); // should error
// @ts-expect-error
(0, hHelpers_1.h2ArgProps)('div', {}, { tabIndex: 1, badProp: 1 }); // should error// should error
(0, hHelpers_1.h2ArgStyle)('div', undefined);
(0, hHelpers_1.h2ArgStyle)('div', {});
(0, hHelpers_1.h2ArgStyle)('div', {}, {});
(0, hHelpers_1.h2ArgStyle)('div', undefined, { tabIndex: 1 });
// @ts-expect-error
(0, hHelpers_1.h2ArgStyle)('div', undefined, { badProp: 1 }); // should error
// @ts-expect-error
(0, hHelpers_1.h2ArgStyle)('div', {}, { tabIndex: 1, badProp: 1 }); // should error// should error
// Using custom function component
var whyFn = function (_a) {
    var optionalProp = _a.optionalProp, requiredProp = _a.requiredProp;
    return (0, hHelpers_1.h1)('div', {}, { role: optionalProp, tabIndex: requiredProp });
};
// @ts-expect-error
(0, hHelpers_1.h1)(whyFn, {}); // should error - missing requiredProp
(0, hHelpers_1.h1)(whyFn, {}, { requiredProp: 1 });
// @ts-expect-error
(0, hHelpers_1.h1)(whyFn, {}, { requiredProp: 1, badProp: 1 }); // should error
(0, hHelpers_1.h2ArgProps)(whyFn, undefined);
(0, hHelpers_1.h2ArgProps)(whyFn, {});
// @ts-expect-error
(0, hHelpers_1.h2ArgProps)(whyFn, {}, {}); // should error
(0, hHelpers_1.h2ArgProps)(whyFn, undefined, { requiredProp: 1 });
// @ts-expect-error
(0, hHelpers_1.h2ArgProps)(whyFn, undefined, { tabIndex: 1 });
// @ts-expect-error
(0, hHelpers_1.h2ArgProps)(whyFn, undefined, { badProp: 1 }); // should error
// @ts-expect-error
(0, hHelpers_1.h2ArgProps)(whyFn, undefined, { requiredProp: 1, badProp: 1 }); // should error
// @ts-expect-error
(0, hHelpers_1.h2ArgProps)(whyFn, {}, { tabIndex: 1, badProp: 1 }); // should error
(0, hHelpers_1.h2ArgStyle)(whyFn, undefined);
(0, hHelpers_1.h2ArgStyle)(whyFn, {});
// @ts-expect-error
(0, hHelpers_1.h2ArgStyle)(whyFn, {}, {}); // should error - missing order
(0, hHelpers_1.h2ArgStyle)(whyFn, undefined, { order: 1, });
// @ts-expect-error
(0, hHelpers_1.h2ArgStyle)(whyFn, undefined, { tabIndex: 1 }); // should error - missing order, invalid prop?
// @ts-expect-error
(0, hHelpers_1.h2ArgStyle)(whyFn, undefined, { badProp: 1 }); // should error
// @ts-expect-error
(0, hHelpers_1.h2ArgStyle)(whyFn, undefined, { order: 1, badProp: 1, }); // should error
// @ts-expect-error
(0, hHelpers_1.h2ArgStyle)(whyFn, {}, { tabIndex: 1, badProp: 1 }); // should error// should error
//# sourceMappingURL=typeTests.js.map