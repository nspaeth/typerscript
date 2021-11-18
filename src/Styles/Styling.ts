import { NestedCSSProperties } from 'typestyle/lib/types'
import { Style } from './Style'
import { mapValues } from '../utils'
import { Keys } from '../types'

/**
 * Transforms an object mapping [typestyles selector]: { ...typestyle-css-definitons }
 * into an object mapping [typestyle selector]: `Style` objects.
 * These `Style` objects are used by `h` to
 *   1) Identify arguments that are meant to be css styles
 *   2) Pass typestyle objects to `React.createElement` as human readable classNames
 *
 * @param classes
 */
export const Styles = <S extends Styling={}>(classes: S): Styles<S> =>
	mapValues(
	  classes,
	// (value, key) => [key, value]
	  (cssProperties, selector) => Style.create([ selector, cssProperties ]),
) as any as Styles<S>
	// fromEntries(
	// entries(classes)
	// 	.map(<Selector extends Keys<CSS>>(
	// 		[key, value]: [key: Selector, value: CSS[Selector]]
	// 	) => [
	// 		key,
	// 		Style.create([ key, value ])
	// 	])) // IS actually mapValues

export type Styling<S extends {} = {}> = {
	[selectorString in keyof S]: selectorString extends Keys<S>
		? NestedCSSProperties
		: never
}

/**
 * Represents an indexed object of [selector]: Style
 */
export type Styles<style extends Styling = {}> = {
	[selectorString in keyof style]: selectorString extends Keys<style>
		? Style<style[selectorString], selectorString>
		: never
}

/**
 * A helper for creating a Style, populated with a
 */
