import * as React from 'react'
const { describe, it } = intern.getPlugin('interface.bdd')
const { expect } = intern.getPlugin('chai')
import { renderToString } from 'react-dom/server';
import * as _htmlLooksLike from 'html-looks-like'
import { h } from './index'

import { hParameters } from './hHelpers'
import { Styles } from './Styles'
type hReturn = ReturnType<typeof h>

const htmlLooksLike = <T extends hReturn>(actual: T, expected: string) =>
	_htmlLooksLike(renderToString(actual), expected)

// function compose<X,G,R>(
// 	    f: (g: G) => R,
// 	g: (...x: X[]) => G,
// ): (...x: X[]) => R {
// 	return (...x) => f(g(...x))
// }
const rh = compose(h, renderToString)
// const rh = <T, A extends []>(el: T, ...args: A) => renderToString(h(el: T, ...args: A))
const div = (...args: hParameters) => h('div', ...args)
const span = (...args: hParameters) => h('span', ...args)


describe('Basic components', () => {
	const expected = `<div></div>`
	const test = (component: Parameters<typeof rh>[0]) =>
		htmlLooksLike(
			rh(component),
			expected,
		)
	// it('undefined', () => htmlLooksLike(undefined, ``))
	// it('a string', () => htmlLooksLike('text', `text`))
	it('an html element', () => test('div'))
	it('functional component', () => test(() => h('div')))

	it('Class component', () => {
		class component extends React.Component<null, null> {
			render() {
				return h('div')
			}
		}

		test(component)
	})

	it('React Pure Component', () => {
		class component extends React.PureComponent<null, null> {
			render() {
				return h('div')
			}
		}
		test(component)
	})
})

describe('Components with props and attributes', () => {
	it('should pass a string prop', () => {
		const width = 100
		const component = (props: { width: string }) => {
			expect(props.width).to.eq(width)
			return div()
		}
		rh(component, { width })
	})

	it('should pass a component prop', () => {
		const width = () => div()
		const component = (props: { width: any }) => {
			expect(props.width).to.eq(width)
			return div()
		}
		rh(component, { width })
	})

	it('should pass a list prop', () => {
		const width = [ 1, 2, 3 ]
		const component = (props: { width: any }) => {
			expect(props.width).to.eq(width)
			return div()
		}
		renderToString(h(component, { width }))
		// rh(component, { width })
	})

	it('should pass an object prop', () => {
		const width = { someKey: 'value' }
		const component = (props: { width: any }) => {
			expect(props.width).to.eq(width)
			return div()
		}
		rh(component, { width })
	})

	it('should pass a function prop', () => {
		const width = () => ({})
		const component = (props: { width: any }) => {
			expect(props.width).to.eq(width)
			return div()
		}
		rh(component, { width })
	})

	it('should pass many props', () => {
		const _stringProp = 'a string'
		const _componentProp = () => div()
		const _numberProp = 1
		const _listProp = [ 1, 2, 3 ]
		const _nullProp: null = null
		const _objProp = { someKey: 'value' }
		const _fnProp = () => ({})
		interface componentProps {
			stringProp: string
			componentProp: any // TODO: 
			numberProp: number
			listProp: number[]
			nullProp: null
			objProp: { someValue: string }
			fnProp(): void
		}
		const component = (props: componentProps) => {
			const { stringProp, componentProp, numberProp, listProp, nullProp, objProp, fnProp } = props
			expect(stringProp).to.eq(_stringProp)
			expect(componentProp).to.eq(_componentProp)
			expect(numberProp).to.eq(_numberProp)
			expect(listProp).to.eq(_listProp)
			expect(nullProp).to.eq(_nullProp)
			expect(objProp).to.eq(_objProp)
			expect(fnProp).to.eq(_fnProp)
			return div()
		}

		h(component, {
			stringProp: _stringProp,
			componentProp: _componentProp,
			numberProp: _numberProp,
			listProp: _listProp,
			nullProp: _nullProp,
			objProp: _objProp,
			fnProp: _fnProp,
		})
	})
})

describe('Should create components with selectors', () => {
	it('with #id selector', () => {
		htmlLooksLike(
			div('#someId'),
			`<div id='someId'></div>`,
		)
	})

	it('with .class selector', () => {
		htmlLooksLike(
			div('.someClass'),
			`<div class='someClass'></div>`,
		)
	})

	it('with .class.class selector', () => {
		htmlLooksLike(
			div('.someClass.otherClass'),
			`<div class='someClass otherClass'></div>`,
		)
	})

	it('with #id.class selector', () => {
		htmlLooksLike(
			div('#someId.someClass'),
			`<div id='someId' class='someClass'></div>`,
		)
	})

	it('with #id.class.class selector', () => {
		htmlLooksLike(
			div('#someId.someClass.otherClass'),
			`<div id='someId' class='someClass otherClass'></div>`,
		)
	})

	it('class without .', () => {
		htmlLooksLike(
			div('#someId.someClass', 'otherClass'),
			`<div id='someId' class='someClass otherClass'></div>`,
		)

		htmlLooksLike(
			div('#someId.someClass', '.otherClass'),
			`<div id='someId' class='someClass otherClass'></div>`,
		)
	})

	it('element and selectors in one arg', () => {
		htmlLooksLike(
			h('div#someId.someClass', '.otherClass'),
			`<div id='someId' class='someClass otherClass'></div>`,
		)
	})
})

describe(`Handle the 'class' attribute specially`, () => {
	interface classProps {
		'class': string
		'className': string
	}

	it(`className attribute should pass as both 'class' and 'className'`, () => {
		const className = '.someClass'
		const component = (props: classProps) => {
			expect(props['class']).to.eql(props.className)
			expect(props.className).to.eql(className)
		}
		rh(component, { 'class': className })
	})

	it(`multiple classes in 'className' should pass to 'class' and 'className'`, () => {
		const className = 'someClass otherClass'
		const component = (props: classProps) => {
			expect(props['class']).to.eql(props.className)
			expect(props.className).to.eql(className)
		}
		rh(component, { 'className': className })
	})

	it(`should pass className selectors as both 'class' and 'className'`, () => {
		const className = '.someClass.otherClass'
		const component = (props: classProps) => {
			expect(props['class']).to.eql(props.className)
			expect(props.className).to.eql(className)
		}
		rh(component, className)
	})
})

describe('Components with children', () => {
	const expected = `<div><span></span><span></span></div>`

	const test = (component: FirsthParam) =>
		htmlLooksLike(
			// console.log(rh(component, [ span(), span() ])) as any ||
				h(component, [ span(), span() ]),
			expected,
		)

	it('html component', () => {
		htmlLooksLike(
			div([ span(), span() ]),
			expected,
		)
	})

	it('list of components', () => {
		htmlLooksLike(
			// keys to avoid react warning because of returning a list
			div([[ span({ key: 1 }), span({ key: 2 }) ]]),
			expected,
		)
	})

	it('React fragment', () => {
		// 	console.log(rh(React.Fragment))
		htmlLooksLike(
			h(React.Fragment, [ span(), span() ]),
			`<span></span><span></span>`,
		)
	})

	it('functional component', () => {
		const component = ({ children }: any) => div([ children ])
		test(component)
	})

	it('class component', () => {
		class component extends React.Component<{ children: any }, null> {
			render() {
				return div([ this.props.children ])
			}
		}
		test(component)
	})

	it('React Pure Component', () => {
		class component extends React.PureComponent<{ children: any }, null> {
			render() { return div([ this.props.children ]) }
		}
		test(component)
	})
})

// // // // combinations of parameters

// // // element/selector/component selector? props? children?

const makeCreatorTests = (
	creationType: string,
	creator: any,
	props: any,
	expectedProps: string,
	children: any,
	expectedChildren: string,
) =>
	describe(creationType, () => {
		it(`* x *`, () => {
			htmlLooksLike(
				h(creator, props),
				`<div ${expectedProps}></div>`,
			)
		})
		it(`* * x`, () => {
			htmlLooksLike(
				h(creator, children),
				`<div>${expectedChildren}</div>`,
			)
		})
		
		it(`* x x`, () => {
			htmlLooksLike(
				h(creator, props, children),
				`<div ${expectedProps}>${expectedChildren}</div>`,
			)
		})
	})

const makeSelectorTests = (
	creationType: string, selectorType: string,
	creator: any,
	props: any, expectedProps: string,
	children: any, expectedChildren: string,
	selector: any,
	expectedId: string,
	expectedClass: string,
) => {
	describe(`${creationType} - ${selectorType}:`, () => {
		// it(`* * *`, () => {
		// 	htmlLooksLike(
		// 		h(creator),
		// 		`<div></div>`,
		// 	)
		// })
		it(`* *`, () => {
			htmlLooksLike(
				h(creator, selector),
				`<div ${expectedId} ${expectedClass}></div>`,
			)
		})
		it(`x *`, () => {
			htmlLooksLike(
				h(creator, selector, props),
				`<div ${expectedId} ${expectedClass} ${expectedProps}></div>`,
			)
		})
		it(`* x`, () => {
			htmlLooksLike(
				h(creator, selector, children),
				`<div ${expectedId} ${expectedClass}>${expectedChildren}</div>`,
			)
		})
		it(`x x`, () => {
			htmlLooksLike(
				h(creator, selector, props, children),
				`<div ${expectedId} ${expectedClass} ${expectedProps}>${expectedChildren}</div>`,
			)
		})
	})
}
// const selector = '#someId.someClass'
// const expectedId = `id='someId'`
// const expectedClass = `class='someClass'`)

const props = { xprop: 'yValue' }
const children = [ span() ]
const expectedChildren = `<span></span>`
const expectedProps = `xprop='yValue'`

makeCreatorTests('html element', 'div', props, expectedProps, children, expectedChildren)
makeCreatorTests('component', (...args: any[]) => div(...args), props, expectedProps, children, expectedChildren)
// TODO: makeCreatorTests('selector', 'div#anId.aClass', props, expectedProps, children, expectedChildren)

makeSelectorTests(
	'html element', 'string 1',
	'div',
	props, expectedProps,
	children, expectedChildren,
	'.someClass', '', `class='someClass'`,
)

makeSelectorTests(
	'html element', 'string 2',
	'div',
	props, expectedProps,
	children, expectedChildren,
	'.someClass.otherClass', '', `class='someClass otherClass'`,
)

makeSelectorTests(
	'html element', 'string 3',
	'div',
	props, expectedProps,
	children, expectedChildren,
	'#someId', `id='someId'`, ``,
)
makeSelectorTests(
	'html element', 'string 4',
	'div',
	props, expectedProps,
	children, expectedChildren,
	'#someId.someClass.otherClass', `id='someId'`, `class='someClass otherClass'`,
)

const S = Styles({
	aClass: {
		color: 'red',
	},
	bClass: {
		color: 'white',
		'$nest': {
			color: 'blue',
		},
	},
})

makeSelectorTests(
	'html element', 'style',
	'div',
	props, expectedProps,
	children, expectedChildren,
	S.aClass, ``, `class='${S.aClass}'`,
)

// TODO: makeSelectorTests('selector', 'string 1', 'div#anId.aClass')


// -- style

// TODO: test Style Object
// TODO: test when id/class is set in combinations of creator, selector, props
// ----
// context?
