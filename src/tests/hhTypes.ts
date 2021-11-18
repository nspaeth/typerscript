import { h, hh } from '../h'
import { Box as _Box } from '@mui/material'
import { styleProp, makeProps, css, validChildren } from './mocks'

const div = hh('div')
// Intrinsic element
validChildren.forEach((children) => {
	const {
		validProps, optionalProps, invalidProps,
		extraProp, wrongProps, validWrongProps, wrongValidProps,
	} = makeProps({
		optionalProps: { tabIndex: 2 },
		requiredProps: {},
		invalidProps: { tabIndex: 'invalid' },
	})

	div()
	div(children)
	div(optionalProps, children)
	div(styleProp, children)
	// there are no required props on div
	// TODO: use an IntrinsicElement that has a required prop, if any exist
	// div(requiredProps, children)

	div(css)
	div(css, children)
	div(css, optionalProps, children)
	div(css, styleProp, children)


	// @ts-expect-error
	div(extraProp, children)
	// @ts-expect-error
	div(invalidProp, children)
	// @ts-expect-error
	div(wrongProps, children)
	// @ts-expect-error
	div(validWrongProps, children) // Should error; has extra prop, and wrong prop type
	// @ts-expect-error
	div(wrongValidProps, children) // Should error; has extra prop

	// @ts-expect-error
	div(css, extraProp, children)
	// @ts-expect-error
	div(css, invalidProp, children)
	// @ts-expect-error
	div(css, wrongProps, children)
	// @ts-expect-error
	div(css, validWrongProps, children)  // Should error; has extra prop, and wrong prop type
	// @ts-expect-error
	div(css, wrongValidProps, children)  // Should error; has extra prop
})

// Function component w/no props
export const NoPropFn = () => h('div')
validChildren.forEach((children) => {
	const extraProp = { invalidProp: 1 }

	h(NoPropFn, css)
	h(NoPropFn, children)
	h(NoPropFn, css, children)

	// @ts-expect-error
	h(NoPropFn, extraProp)
	// @ts-expect-error
	h(NoPropFn, extraProp, children)

	// @ts-expect-error
	h(NoPropFn, css, extraProp)
	// @ts-expect-error
	h(NoPropFn, css, extraProp, children)
})


////////// function component w/only optional
export interface OptionalProps { optionalProp?: number }
export const OptionalPropFn = hh(({ optionalProp }: OptionalProps) => h('div', { tabIndex: optionalProp }))
validChildren.forEach((children) => {
	const {
		requiredProps, optionalProps, validProps,
		invalidProps, wrongProps, extraProp,
		validWrongProps, wrongValidProps,
	} = makeProps({
		optionalProps: { optionalProp: 2 },
		invalidProps: { optionalProp: 'string' },
		requiredProps: {},
	})

	OptionalPropFn()
	OptionalPropFn(css)
	OptionalPropFn(children)
	OptionalPropFn(optionalProps, children)
	OptionalPropFn(css, children)
	OptionalPropFn(css, optionalProps, children)

	// @ts-expect-error
	OptionalPropFn(extraProp, children)
	// @ts-expect-error
	OptionalPropFn(invalidProp, children)
	// @ts-expect-error
	OptionalPropFn(wrongProps, children)
	// @ts-expect-error
	OptionalPropFn(validWrongProps, children) // Should error; Has extra prop and wrong type
	// @ts-expect-error
	OptionalPropFn(wrongValidProps, children) // Should error; Has extra prop

	// @ts-expect-error
	OptionalPropFn(css, extraProp, children)
	// @ts-expect-error
	OptionalPropFn(css, invalidProp, children)
	// @ts-expect-error
	OptionalPropFn(css, wrongProps, children)
	// @ts-expect-error
	OptionalPropFn(css, validWrongProps, children) // Should error; Has extra prop and wrong type
	// @ts-expect-error
	OptionalPropFn(css, wrongValidProps, children) // Should error; Has extra prop
})

///////// function component w/only required
export interface RequiredProps { requiredProp: string }
export const RequiredPropFn = hh(({ requiredProp }: RequiredProps) => h('div', { title: requiredProp }))

validChildren.forEach((children) => {
	const {
		requiredProps, optionalProps, validProps,
		invalidProps, wrongProps, extraProp,
		validWrongProps, wrongValidProps,
	} = makeProps({
		requiredProps: { requiredProp: 'title'},
		invalidProps: { requiredProp: 0 },
		optionalProps: {}
	})

	RequiredPropFn(requiredProps)
	RequiredPropFn(css, requiredProps)
	RequiredPropFn(requiredProps, children)
	RequiredPropFn(css, requiredProps, children)

	// @ts-expect-error
	RequiredPropFn(children)
	// @ts-expect-error
	RequiredPropFn(css, children)

	// @ts-expect-error
	RequiredPropFn(extraProp, children)
	// @ts-expect-error
	RequiredPropFn(invalidProp, children)
	// @ts-expect-error
	RequiredPropFn(wrongProps, children)
	// @ts-expect-error
	RequiredPropFn(validWrongProps, children) // Should error; Has extra prop and wrong type
	// @ts-expect-error
	RequiredPropFn(wrongValidProps, children) // Should error; Has extra prop

	// @ts-expect-error
	RequiredPropFn(css)
	// @ts-expect-error
	RequiredPropFn(css, extraProp, children)
	// @ts-expect-error
	RequiredPropFn(css, invalidProp, children)
	// @ts-expect-error
	RequiredPropFn(css, wrongProps, children)
	// @ts-expect-error
	RequiredPropFn(css, validWrongProps, children) // Should error; Has extra prop and wrong type
	// @ts-expect-error
	RequiredPropFn(css, wrongValidProps, children) // Should error; Has extra prop
})


// function component w/optional&required
export interface FnProps extends OptionalProps, RequiredProps {}
export const Fn = hh(({ requiredProp, optionalProp }: FnProps) => h('div', { tabIndex: optionalProp, title: requiredProp }))
validChildren.forEach((children) => {
	const {
		requiredProps, optionalProps, validProps,
		invalidProps, wrongProps, extraProp,
		validWrongProps, wrongValidProps,
	} = makeProps({
		optionalProps: { optionalProp: 1 },
		requiredProps: { requiredProp: 'title' },
		invalidProps: { requiredProp: 0 },
	})

	Fn(requiredProps, children)
	Fn(validProps, children)
	Fn(css, requiredProps, children)
	Fn(css, validProps, children)

	// @ts-expect-error
	Fn(children)
	// @ts-expect-error
	Fn(optionalProps, children)
	// @ts-expect-error
	Fn(styleProp, children)

	// @ts-expect-error
	Fn(css, children)
	// @ts-expect-error
	Fn(css, optionalProps, children)
	// @ts-expect-error
	Fn(css, styleProp, children)

	// @ts-expect-error
	Fn(extraProp, children)
	// @ts-expect-error
	Fn(invalidProp, children)
	// @ts-expect-error
	Fn(wrongProps, children)
	// @ts-expect-error
	Fn(validWrongProps, children) // Should error; Has extra prop and wrong type
	// @ts-expect-error
	Fn(css, wrongValidProps, children) // Should error; Has extra prop

	// @ts-expect-error
	Fn(css)
	// @ts-expect-error
	Fn(css, extraProp, children)
	// @ts-expect-error
	Fn(css, invalidProp, children)
	// @ts-expect-error
	Fn(css, wrongProps, children)
	// @ts-expect-error
	Fn(css, validWrongProps, children) // Should error; Has extra prop and wrong type
	// @ts-expect-error
	Fn(css, wrongValidProps, children) // Should error; Has extra prop
})


// Class Component
const Box = hh(_Box, 'Box')
validChildren.forEach((children) => {
	const {
		requiredProps, optionalProps, validProps,
		invalidProps, wrongProps, extraProp,
		validWrongProps, wrongValidProps,
	} = makeProps({
		optionalProps: { optionalProp: 1 },
		requiredProps: { requiredProp: 'title' },
		invalidProps: { requiredProp: 0 },
	})

	Box(styleProp, children)
	Box(children)
	Box(css, children)
	Box(css, styleProp, children)
	Box(css)

	// Box(requiredProps, children)
	// Box(validProps, children)
	// Box(css, requiredProps, children)
	// Box(css, validProps, children)

	// @ts-expect-error
	Box(optionalProps, children)


	// @ts-expect-error
	Box(css, optionalProps, children)
	// @ts-expect-error
	Box(extraProp, children)
	// @ts-expect-error
	Box(invalidProp, children)
	// @ts-expect-error
	Box(wrongProps, children)
	// @ts-expect-error
	Box(validWrongProps, children) // Should error; Has extra prop and wrong type
	// @ts-expect-error
	Box(css, wrongValidProps, children) // Should error; Has extra prop


	// @ts-expect-error
	Box(css, extraProp, children)
	// @ts-expect-error
	Box(css, invalidProp, children)
	// @ts-expect-error
	Box(css, wrongProps, children)
	// @ts-expect-error
	Box(css, validWrongProps, children) // Should error; Has extra prop and wrong type
	// @ts-expect-error
	Box(css, wrongValidProps, children) // Should error; Has extra prop
})
