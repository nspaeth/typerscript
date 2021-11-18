"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var React = require("react");
var _a = intern.getPlugin('interface.bdd'), describe = _a.describe, it = _a.it;
var expect = intern.getPlugin('chai').expect;
var server_1 = require("react-dom/server");
var _htmlLooksLike = require("html-looks-like");
var index_1 = require("./index");
var Styles_1 = require("./Styles");
var htmlLooksLike = function (actual, expected) {
    return _htmlLooksLike((0, server_1.renderToString)(actual), expected);
};
// function compose<X,G,R>(
// 	    f: (g: G) => R,
// 	g: (...x: X[]) => G,
// ): (...x: X[]) => R {
// 	return (...x) => f(g(...x))
// }
var rh = compose(index_1.h, server_1.renderToString);
// const rh = <T, A extends []>(el: T, ...args: A) => renderToString(h(el: T, ...args: A))
var div = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return index_1.h.apply(void 0, __spreadArray(['div'], args, false));
};
var span = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return index_1.h.apply(void 0, __spreadArray(['span'], args, false));
};
describe('Basic components', function () {
    var expected = "<div></div>";
    var test = function (component) {
        return htmlLooksLike(rh(component), expected);
    };
    // it('undefined', () => htmlLooksLike(undefined, ``))
    // it('a string', () => htmlLooksLike('text', `text`))
    it('an html element', function () { return test('div'); });
    it('functional component', function () { return test(function () { return (0, index_1.h)('div'); }); });
    it('Class component', function () {
        var component = /** @class */ (function (_super) {
            __extends(component, _super);
            function component() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            component.prototype.render = function () {
                return (0, index_1.h)('div');
            };
            return component;
        }(React.Component));
        test(component);
    });
    it('React Pure Component', function () {
        var component = /** @class */ (function (_super) {
            __extends(component, _super);
            function component() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            component.prototype.render = function () {
                return (0, index_1.h)('div');
            };
            return component;
        }(React.PureComponent));
        test(component);
    });
});
describe('Components with props and attributes', function () {
    it('should pass a string prop', function () {
        var width = 100;
        var component = function (props) {
            expect(props.width).to.eq(width);
            return div();
        };
        rh(component, { width: width });
    });
    it('should pass a component prop', function () {
        var width = function () { return div(); };
        var component = function (props) {
            expect(props.width).to.eq(width);
            return div();
        };
        rh(component, { width: width });
    });
    it('should pass a list prop', function () {
        var width = [1, 2, 3];
        var component = function (props) {
            expect(props.width).to.eq(width);
            return div();
        };
        (0, server_1.renderToString)((0, index_1.h)(component, { width: width }));
        // rh(component, { width })
    });
    it('should pass an object prop', function () {
        var width = { someKey: 'value' };
        var component = function (props) {
            expect(props.width).to.eq(width);
            return div();
        };
        rh(component, { width: width });
    });
    it('should pass a function prop', function () {
        var width = function () { return ({}); };
        var component = function (props) {
            expect(props.width).to.eq(width);
            return div();
        };
        rh(component, { width: width });
    });
    it('should pass many props', function () {
        var _stringProp = 'a string';
        var _componentProp = function () { return div(); };
        var _numberProp = 1;
        var _listProp = [1, 2, 3];
        var _nullProp = null;
        var _objProp = { someKey: 'value' };
        var _fnProp = function () { return ({}); };
        var component = function (props) {
            var stringProp = props.stringProp, componentProp = props.componentProp, numberProp = props.numberProp, listProp = props.listProp, nullProp = props.nullProp, objProp = props.objProp, fnProp = props.fnProp;
            expect(stringProp).to.eq(_stringProp);
            expect(componentProp).to.eq(_componentProp);
            expect(numberProp).to.eq(_numberProp);
            expect(listProp).to.eq(_listProp);
            expect(nullProp).to.eq(_nullProp);
            expect(objProp).to.eq(_objProp);
            expect(fnProp).to.eq(_fnProp);
            return div();
        };
        (0, index_1.h)(component, {
            stringProp: _stringProp,
            componentProp: _componentProp,
            numberProp: _numberProp,
            listProp: _listProp,
            nullProp: _nullProp,
            objProp: _objProp,
            fnProp: _fnProp,
        });
    });
});
describe('Should create components with selectors', function () {
    it('with #id selector', function () {
        htmlLooksLike(div('#someId'), "<div id='someId'></div>");
    });
    it('with .class selector', function () {
        htmlLooksLike(div('.someClass'), "<div class='someClass'></div>");
    });
    it('with .class.class selector', function () {
        htmlLooksLike(div('.someClass.otherClass'), "<div class='someClass otherClass'></div>");
    });
    it('with #id.class selector', function () {
        htmlLooksLike(div('#someId.someClass'), "<div id='someId' class='someClass'></div>");
    });
    it('with #id.class.class selector', function () {
        htmlLooksLike(div('#someId.someClass.otherClass'), "<div id='someId' class='someClass otherClass'></div>");
    });
    it('class without .', function () {
        htmlLooksLike(div('#someId.someClass', 'otherClass'), "<div id='someId' class='someClass otherClass'></div>");
        htmlLooksLike(div('#someId.someClass', '.otherClass'), "<div id='someId' class='someClass otherClass'></div>");
    });
    it('element and selectors in one arg', function () {
        htmlLooksLike((0, index_1.h)('div#someId.someClass', '.otherClass'), "<div id='someId' class='someClass otherClass'></div>");
    });
});
describe("Handle the 'class' attribute specially", function () {
    it("className attribute should pass as both 'class' and 'className'", function () {
        var className = '.someClass';
        var component = function (props) {
            expect(props['class']).to.eql(props.className);
            expect(props.className).to.eql(className);
        };
        rh(component, { 'class': className });
    });
    it("multiple classes in 'className' should pass to 'class' and 'className'", function () {
        var className = 'someClass otherClass';
        var component = function (props) {
            expect(props['class']).to.eql(props.className);
            expect(props.className).to.eql(className);
        };
        rh(component, { 'className': className });
    });
    it("should pass className selectors as both 'class' and 'className'", function () {
        var className = '.someClass.otherClass';
        var component = function (props) {
            expect(props['class']).to.eql(props.className);
            expect(props.className).to.eql(className);
        };
        rh(component, className);
    });
});
describe('Components with children', function () {
    var expected = "<div><span></span><span></span></div>";
    var test = function (component) {
        return htmlLooksLike(
        // console.log(rh(component, [ span(), span() ])) as any ||
        (0, index_1.h)(component, [span(), span()]), expected);
    };
    it('html component', function () {
        htmlLooksLike(div([span(), span()]), expected);
    });
    it('list of components', function () {
        htmlLooksLike(
        // keys to avoid react warning because of returning a list
        div([[span({ key: 1 }), span({ key: 2 })]]), expected);
    });
    it('React fragment', function () {
        // 	console.log(rh(React.Fragment))
        htmlLooksLike((0, index_1.h)(React.Fragment, [span(), span()]), "<span></span><span></span>");
    });
    it('functional component', function () {
        var component = function (_a) {
            var children = _a.children;
            return div([children]);
        };
        test(component);
    });
    it('class component', function () {
        var component = /** @class */ (function (_super) {
            __extends(component, _super);
            function component() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            component.prototype.render = function () {
                return div([this.props.children]);
            };
            return component;
        }(React.Component));
        test(component);
    });
    it('React Pure Component', function () {
        var component = /** @class */ (function (_super) {
            __extends(component, _super);
            function component() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            component.prototype.render = function () { return div([this.props.children]); };
            return component;
        }(React.PureComponent));
        test(component);
    });
});
// // // // combinations of parameters
// // // element/selector/component selector? props? children?
var makeCreatorTests = function (creationType, creator, props, expectedProps, children, expectedChildren) {
    return describe(creationType, function () {
        it("* x *", function () {
            htmlLooksLike((0, index_1.h)(creator, props), "<div " + expectedProps + "></div>");
        });
        it("* * x", function () {
            htmlLooksLike((0, index_1.h)(creator, children), "<div>" + expectedChildren + "</div>");
        });
        it("* x x", function () {
            htmlLooksLike((0, index_1.h)(creator, props, children), "<div " + expectedProps + ">" + expectedChildren + "</div>");
        });
    });
};
var makeSelectorTests = function (creationType, selectorType, creator, props, expectedProps, children, expectedChildren, selector, expectedId, expectedClass) {
    describe(creationType + " - " + selectorType + ":", function () {
        // it(`* * *`, () => {
        // 	htmlLooksLike(
        // 		h(creator),
        // 		`<div></div>`,
        // 	)
        // })
        it("* *", function () {
            htmlLooksLike((0, index_1.h)(creator, selector), "<div " + expectedId + " " + expectedClass + "></div>");
        });
        it("x *", function () {
            htmlLooksLike((0, index_1.h)(creator, selector, props), "<div " + expectedId + " " + expectedClass + " " + expectedProps + "></div>");
        });
        it("* x", function () {
            htmlLooksLike((0, index_1.h)(creator, selector, children), "<div " + expectedId + " " + expectedClass + ">" + expectedChildren + "</div>");
        });
        it("x x", function () {
            htmlLooksLike((0, index_1.h)(creator, selector, props, children), "<div " + expectedId + " " + expectedClass + " " + expectedProps + ">" + expectedChildren + "</div>");
        });
    });
};
// const selector = '#someId.someClass'
// const expectedId = `id='someId'`
// const expectedClass = `class='someClass'`)
var props = { xprop: 'yValue' };
var children = [span()];
var expectedChildren = "<span></span>";
var expectedProps = "xprop='yValue'";
makeCreatorTests('html element', 'div', props, expectedProps, children, expectedChildren);
makeCreatorTests('component', function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return div.apply(void 0, args);
}, props, expectedProps, children, expectedChildren);
// TODO: makeCreatorTests('selector', 'div#anId.aClass', props, expectedProps, children, expectedChildren)
makeSelectorTests('html element', 'string 1', 'div', props, expectedProps, children, expectedChildren, '.someClass', '', "class='someClass'");
makeSelectorTests('html element', 'string 2', 'div', props, expectedProps, children, expectedChildren, '.someClass.otherClass', '', "class='someClass otherClass'");
makeSelectorTests('html element', 'string 3', 'div', props, expectedProps, children, expectedChildren, '#someId', "id='someId'", "");
makeSelectorTests('html element', 'string 4', 'div', props, expectedProps, children, expectedChildren, '#someId.someClass.otherClass', "id='someId'", "class='someClass otherClass'");
var S = (0, Styles_1.Styles)({
    aClass: {
        color: 'red',
    },
    bClass: {
        color: 'white',
        '$nest': {
            color: 'blue',
        },
    },
});
makeSelectorTests('html element', 'style', 'div', props, expectedProps, children, expectedChildren, S.aClass, "", "class='" + S.aClass + "'");
// TODO: makeSelectorTests('selector', 'string 1', 'div#anId.aClass')
// -- style
// TODO: test Style Object
// TODO: test when id/class is set in combinations of creator, selector, props
// ----
// context?
//# sourceMappingURL=render.js.map