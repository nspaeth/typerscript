import {
	createElement,
	PropsWithChildren,
	ComponentType,
	Attributes,
	ReactElement,
} from 'react'

import { Children, RequiredKeys, Component } from './types'
import { isChildren } from './utils'
import { Style } from './Styles'


import { NestedCSSProperties } from 'typestyle/lib/types'
// CSSProperties extends NestedCSSProperties = {}, Selector extends SelectorString = never
export type Css<S extends NestedCSSProperties, Selector extends string> = string | Style<S, Selector>;
// export type Css<C, S extends string> = string | Style<S>;
export type SelectorProps = { id?: string, className?: string } | undefined
// declare type Props<T> = T extends ComponentType<infer P>
export type Props<T> = T extends ComponentType<infer P>
	? P extends object ? PropsWithChildren<P> & Attributes : never
	: T extends keyof JSX.IntrinsicElements
	? JSX.IntrinsicElements[T]
	: never;

export type H1 = [ Children: Children ] | []

export type H2PropsOnly<T> = [ Props: Props<T> ]
export type H2PropsAndChildren<T> = [ Props: Props<T>, Children?: Children ]
export type H2Props<T extends Component> =
	H2PropsAndChildren<T> | H2PropsOnly<T> | H1

export type H2StyleOnly<C, S extends string> = [ Style: Css<C,S> ]
export type H2StyleAndChildren<C, S extends string> = [ Style: Css<C,S>, Children?: Children ]
export type H2Style<C, S extends string> = H2StyleAndChildren<C,S> | H2StyleOnly<C,S> | H1

export type H2<T extends Component, C, S extends string> = H2Style<C,S> | H2Props<T>;
export type H3All<T extends Component, C, S extends string> = [ Style: Css<C,S>, Props: Props<T>, Children: Children ]
export type H3<T extends Component, C, S extends string> = H3All<T,C,S> | [ Style: Css<C,S>, ...rest: H2Props<T>] | H2Props<T>;
export type H<T extends Component,C, S extends string> = H3<T,C,S> | H2<T,C,S> | H1;


export type NonPropArgs<C, S extends string> =
	[ Style: Css<C,S>, Children: Children ]
	| [ Style: Css<C,S> ]
	| [ Children: Children ]
	| [ ];

export type PropArgs<T extends Component, C, S extends string> =
	[ Style: Css<C,S>, Props: Props<T>, Children: Children ]
	| [ Style: Css<C,S>, Props: Props<T> ]
	| [ Props: Props<T>, Children: Children ]
	| [ Props: Props<T> ]

export type hParameters<T extends Component=any,C=any, S extends string=any> =
	RequiredKeys<Props<T>> extends never
	? PropArgs<T,C,S> | NonPropArgs<C,S>
	: PropArgs<T,C,S>;

// TODO: memoize
const propsWithSelectors = <C,S>(style?: Style<C,S>, props: {}) => {
	if (style) {
		// TODO: merge via concat className
		if (props) return { ...style, ...props }
		return style
	}
	return props
}

const EmptyArray: Children = []
export function h1<T extends Component, C, S extends string>(
	name: T,
	style: SelectorProps,
	props: Props<T>,
	children: Children = EmptyArray,
): ReactElement {
	// let reactProps = !!style ? { ...style, ...props } : Props
	const reactProps = propsWithSelectors(style, props) ?? null
	// if (!!style) {
	// 	// const props = !!selector ? { ...selector, ...Props } : Props
	// 	// TODO: memoize for perf
	// 	if (!!props) return createElement(name, { ...style, ...props }, ...children)
	// 	else return createElement(name, style as any, ...children)
	// }
	return createElement(
		name,
		reactProps,
		...children
	)
}

export function h2ArgProps<T extends Component, C, S>(
	name: T,
	selector: SelectorProps,
	propsOrChildren?: Props<T> | Children,
	children?: Children,
): ReactElement {
	if (isChildren(propsOrChildren)) return h1(name, selector, null, propsOrChildren)
	return h1(name, selector, propsOrChildren as Props<T>, children)
}

export function h2ArgStyle<T extends Component, C, S extends string>(
	name: T,
	selector?: SelectorProps,
	...args: H2Props<T>
) {
	if (args.length > 0 ) return h2ArgProps(name, selector, ...args)
	return h1(name, selector, undefined, undefined)
}



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
