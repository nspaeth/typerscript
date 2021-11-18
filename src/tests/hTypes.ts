import { h, hh } from '../h'
import { Box as _Box } from '@mui/material'
import { styleProp, makeProps, css, validChildren } from './mocks'

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

	h('div')
	h('div', children)
	h('div', optionalProps, children)
	h('div', styleProp, children)
	// there are no required props on div
	// TODO: use an IntrinsicElement that has a required prop, if any exist
	// h('div', requiredProps, children)

	h('div', css)
	h('div', css, children)
	h('div', css, optionalProps, children)
	h('div', css, styleProp, children)


	// @ts-expect-error
	h('div', extraProp, children)
	// @ts-expect-error
	h('div', invalidProp, children)
	// @ts-expect-error
	h('div', wrongProps, children)
	// @ts-expect-error
	h('div', validWrongProps, children) // Should error; has extra prop, and wrong prop type
	// @ts-expect-error
	h('div', wrongValidProps, children) // Should error; has extra prop

	// @ts-expect-error
	h('div', css, extraProp, children)
	// @ts-expect-error
	h('div', css, invalidProp, children)
	// @ts-expect-error
	h('div', css, wrongProps, children)
	// @ts-expect-error
	h('div', css, validWrongProps, children)  // Should error; has extra prop, and wrong prop type
	// @ts-expect-error
	h('div', css, wrongValidProps, children)  // Should error; has extra prop
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
export const OptionalPropFn = ({ optionalProp }: OptionalProps) => h('div', { tabIndex: optionalProp })
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

	h(OptionalPropFn)
	h(OptionalPropFn, css)
	h(OptionalPropFn, children)
	h(OptionalPropFn, optionalProps, children)
	h(OptionalPropFn, css, children)
	h(OptionalPropFn, css, optionalProps, children)

	// @ts-expect-error
	h(OptionalPropFn, extraProp, children)
	// @ts-expect-error
	h(OptionalPropFn, invalidProp, children)
	// @ts-expect-error
	h(OptionalPropFn, wrongProps, children)
	// @ts-expect-error
	h(OptionalPropFn, validWrongProps, children) // Should error; Has extra prop and wrong type
	// @ts-expect-error
	h(OptionalPropFn, wrongValidProps, children) // Should error; Has extra prop

	// @ts-expect-error
	h(OptionalPropFn, css, extraProp, children)
	// @ts-expect-error
	h(OptionalPropFn, css, invalidProp, children)
	// @ts-expect-error
	h(OptionalPropFn, css, wrongProps, children)
	// @ts-expect-error
	h(OptionalPropFn, css, validWrongProps, children) // Should error; Has extra prop and wrong type
	// @ts-expect-error
	h(OptionalPropFn, css, wrongValidProps, children) // Should error; Has extra prop
})

///////// function component w/only required
export interface RequiredProps { requiredProp: string }
export const RequiredPropFn = ({ requiredProp }: RequiredProps) => h('div', { title: requiredProp })

validChildren.forEach((children) => {
	const {
		requiredProps, optionalProps, validProps,
		invalidProps, wrongProps, extraProp,
		validWrongProps, wrongValidProps,
	} = makeProps({
		requiredProps: { requiredProp: 'title'},
		invalidProps: { requiredProp: 'invalid' },
		optionalProps: {}
	})

	h(RequiredPropFn, requiredProps)
	h(RequiredPropFn, css, requiredProps)
	h(RequiredPropFn, requiredProps, children)
	h(RequiredPropFn, css, requiredProps, children)

	// @ts-expect-error
	h(RequiredPropFn, children)
	// @ts-expect-error
	h(RequiredPropFn, css, children)

	// @ts-expect-error
	h(RequiredPropFn, extraProp, children)
	// @ts-expect-error
	h(RequiredPropFn, invalidProp, children)
	// @ts-expect-error
	h(RequiredPropFn, wrongProps, children)
	// @ts-expect-error
	h(RequiredPropFn, validWrongProps, children) // Should error; Has extra prop and wrong type
	// @ts-expect-error
	h(RequiredPropFn, wrongValidProps, children) // Should error; Has extra prop

	// @ts-expect-error
	h(RequiredPropFn, css)
	// @ts-expect-error
	h(RequiredPropFn, css, extraProp, children)
	// @ts-expect-error
	h(RequiredPropFn, css, invalidProp, children)
	// @ts-expect-error
	h(RequiredPropFn, css, wrongProps, children)
	// @ts-expect-error
	h(RequiredPropFn, css, validWrongProps, children) // Should error; Has extra prop and wrong type
	// @ts-expect-error
	h(RequiredPropFn, css, wrongValidProps, children) // Should error; Has extra prop
})


// function component w/optional&required
export interface FnProps extends OptionalProps, RequiredProps {}
export const Fn = ({ requiredProp, optionalProp }: FnProps) => h('div', { title: requiredProp, tabIndex: optionalProp })
validChildren.forEach((children) => {
	const {
		requiredProps, optionalProps, validProps,
		invalidProps, wrongProps, extraProp,
		validWrongProps, wrongValidProps,
	} = makeProps({
		optionalProps: { optionalProp: 1 },
		requiredProps: { requiredProp: 'title' },
		invalidProps: { requiredProp: 1 },
	})


	h(Fn, requiredProps, children)

	// @ts-expect-error
	h(Fn, children)
	// @ts-expect-error
	h(Fn, optionalProps, children)
	// @ts-expect-error
	h(Fn, styleProp, children)

	// @ts-expect-error
	h(Fn, css, children)
	// @ts-expect-error
	h(Fn, css, optionalProps, children)
	// @ts-expect-error
	h(Fn, css, styleProp, children)


	// @ts-expect-error
	h(Fn, extraProp, children)
	// @ts-expect-error
	h(Fn, invalidProp, children)
	// @ts-expect-error
	h(Fn, wrongProps, children)
	// @ts-expect-error
	h(Fn, validWrongProps, children) // Should error; Has extra prop and wrong type
	// @ts-expect-error
	h(Fn, wrongValidProps, children) // Should error; Has extra prop

	// @ts-expect-error
	h(Fn, css)
	// @ts-expect-error
	h(Fn, css, extraProp, children)
	// @ts-expect-error
	h(Fn, css, invalidProp, children)
	// @ts-expect-error
	h(Fn, css, wrongProps, children)
	// @ts-expect-error
	h(Fn, css, validWrongProps, children) // Should error; Has extra prop and wrong type
	// @ts-expect-error
	h(Fn, css, wrongValidProps, children) // Should error; Has extra prop
})


// Class Component
validChildren.forEach((children) => {
	h('div', children)

	h('div', optionalProps, children)
	h('div', styleProp, children)
	h('div', requiredProps, children)

	h('div', css, children)
	h('div', css, optionalProps, children)
	h('div', css, styleProp, children)


	// @ts-expect-error
	h('div', extraProp, children)
	// @ts-expect-error
	h('div', invalidProp, children)
	// @ts-expect-error
	h('div', { ...invalidProp, ...extraProp }, children)
	// @ts-expect-error
	h('div', validWrongProps, children)

	// @ts-expect-error
	h('div', css)
	// @ts-expect-error
	h('div', css, extraProp, children)
	// @ts-expect-error
	h('div', css, invalidProp, children)
	// @ts-expect-error
	h('div', css, { ...invalidProp, ...extraProp }, children)
	// @ts-expect-error
	h('div', css, validWrongProps, children)
})
