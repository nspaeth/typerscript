import { ReactElement } from 'react'
import { Component } from './types'
import { Style } from './Styles'
import { isSelector, isStyleObject } from './utils'
import { parseSelector } from './parseSelector'
import { Props, h2ArgStyle, h1, h2ArgProps, hParameters } from './hHelpers'
import { NestedCSSProperties } from 'typestyle/lib/types'
import { getDisplayName, setDisplayName } from './displayNames'
export type hhComponent<T extends Component> = (...args: hParameters<T>) => ReactElement

/**
 * Instantiates a react component, given an html/svg tag name, or a react component, and the
 * following optional arguments, in order:
 * 1) Styles - Either a `Style` object, or a css selector: '.aClass.bClass'
 * 2) Props object - an object containing props to the component
 * 3) children - a list of instantiated child components
 * @param nameOrType
 * @param _args
 */
function h<T extends Component, C extends NestedCSSProperties, S extends string>(
	nameOrType: T,
	...args: hParameters<T,C,S>
): ReactElement {
	const style = isStyleObject(args[0])
		? parseSelector(args[0].selector)
		: isSelector(args[0])
  		? parseSelector(args[0])
		  : undefined

	if (args.length === 0) return h1(nameOrType, undefined, undefined, undefined)
	if (args.length === 3) return h1(nameOrType, style, args[1] as Props<T>, args[2])

	if (!!style) return h2ArgStyle<T,C,S>(nameOrType, style, args[1])
	return h2ArgProps<T,C,S>(nameOrType, undefined, args[0] as Props<T>, args[1] as Children)
}

function hh<T extends Component, C extends NestedCSSProperties, S extends string>(
	nameOrType: T,
	name?: string,
): hhComponent<T> {
	return (...args: hParameters<T, C, S>) =>
		h(
			nameOrType,
			...args
		)
	// const displayName = getDisplayName(nameOrType, name)
	// return setDisplayName(
	// 	displayName,
	// 	(...args: hParameters<T, C, S>) =>
	// 		h(
	// 		setDisplayName(displayName, nameOrType),
	// 		...args
	// 	),
	// )
}


export { h, hh }
