// import { Styles } from './createClass'
import { Styles } from './Styles'
import { h, hh } from './h'
import { AriaRole } from 'react'
import { Box as _Box } from '@mui/material'

// Should allow optionalProps
// should require requiredProps
// Combinations:
// h, S, P, C
// .  P, C
// . S, C
// . S, P
// . C
// .
// h, hh, string, class, function
// fragment
// array

// children: h, hh, string, class, function, empty, none, prop

// type UnionToIntersection<U> = (
// 	U extends any
// 		? (k: U) => void
// 	: never
// ) extends (k: infer I) => void
// 	? I
// 	: never;

interface divHelperProps {
	optionalProp?: AriaRole
	requiredProp: number
}

const baseStyles = {
	Flex: { marginTop: 1 }
}
const S = Styles(baseStyles)
function make() {
	const div = hh('div')
	const divHelper = hh(
		({ optionalProp, requiredProp }: divHelperProps) => div({ role: optionalProp, tabIndex: requiredProp })
	)

	// Should not error
	h('div')
	h('div', S.Flex)
	h('div', { tabIndex: 2 })
	h('div', S.Flex, { tabIndex: 2, })
	h(({ optionalProp, requiredProp }: divHelperProps) => h('div', { role: optionalProp, tabIndex: requiredProp }), { requiredProp: 1})

	div({ });
	div({ tabIndex: 1 });
	div(S.Flex, { });
	div(S.Flex, { tabIndex: 1 });

	divHelper({ requiredProp: 1,  })
	divHelper(S.Flex, { requiredProp:1 })

	h('div', [])

	h('div', S.Flex, [])
	h('div', { tabIndex: 2 }, [])
	h('div', S.Flex, { tabIndex: 2, }, [])
	h(({ optionalProp, requiredProp }: divHelperProps) => h('div', { role: optionalProp, tabIndex: requiredProp }), { requiredProp: 1 }, []);

	div({ }, [])
	div({ tabIndex: 1 }, [])
	div(S.Flex, { }, [])
	div(S.Flex, { tabIndex: 1 }, [])

	divHelper({ requiredProp: 1,  }, [])
	divHelper(S.Flex, { requiredProp:1 }, [])


	// @ts-expect-error
	h('div', { badProp: 1 }) // has invalid prop - thinks it is a style?
	// @ts-expect-error
	h('div', S.Flex, { badProp: 1 })
	// @ts-expect-error
	h('div', S.Flex, { tabIndex: 2, badProp: 1 }) // wrong spot
	// @ts-expect-error
	div({ blah: 1 });
	// @ts-expect-error
	div({ tabIndex: 1, blah: 1 }); // wrong spot

	// @ts-expect-error
	div(S.Flex, { blah: 1 });
	// @ts-expect-error
	div(S.Flex, { tabIndex: 1, blah: 1 });
	// @ts-expect-error
	h(({ optionalProp, requiredProp }: divHelperProps) => h('div', { role: optionalProp, tabIndex: requiredProp }))

	// @ts-expect-error
	divHelper()
	// @ts-expect-error
	divHelper({})
	// @ts-expect-error
	divHelper({ badProp: 3 })
	// @ts-expect-error
	divHelper({ requiredProp: 1, badProp: 3 })
	// @ts-expect-error
	divHelper(S.Flex, { badProp: 3 }) // wrong spot
	// @ts-expect-error
	divHelper(S.Flex, { requiredProp: 1, badProp: 3 }) // wrong spot

	// @ts-expect-error
	h('div', { badProp: 1 }, [])
	// @ts-expect-error
	h('div', S.Flex, { badProp: 1 }, [])
	// @ts-expect-error
	h('div', S.Flex, { tabIndex: 2, badProp: 1 }, [])
	// @ts-expect-error
	h(({ optionalProp, requiredProp }: divHelperProps) => h('div', { role: optionalProp, tabIndex: requiredProp }, []))

	// @ts-expect-error
	div({ blah: 1 }, []);
	// @ts-expect-error
	div({ tabIndex: 1, blah: 1 }, []);
	// @ts-expect-error
	div(S.Flex, { blah: 1 }, [])
	// @ts-expect-error
	div(S.Flex, { tabIndex: 1, blah: 1 }, [])
	// @ts-expect-error
	divHelper([])
	// @ts-expect-error
	divHelper({ }, [])
	// @ts-expect-error
	divHelper({ badProp: 3 }, [])
	// @ts-expect-error
	divHelper({ requiredProp: 1, badProp: 3 }, [])
	// @ts-expect-error
	divHelper(S.Flex, { badProp: 3 }, [])
	// @ts-expect-error
	divHelper(S.Flex, { requiredProp: 1, badProp: 3 }, [])


	const Box = hh(_Box, 'Box')
	Box({ })
}

import { h1, h2ArgProps, h2ArgStyle } from './hHelpers'

// should not allow unrecognized props
// should require mandatory props

// Using native element

h1('div')
// @ts-expect-error
h1('div', { })
h1('div', undefined, { tabIndex: 1 })

// @ts-expect-error
h1('div', { }, { badProp: 1 }) // should error
// @ts-expect-error
h1('div', { }, { tabIndex: 1, badProp: 1 }) // should error

h2ArgProps('div', undefined)
h2ArgProps('div', {})
h2ArgProps('div', {}, { })
h2ArgProps('div', undefined, { tabIndex: 1,  })
// @ts-expect-error
h2ArgProps('div', undefined, { badProp: 1 }) // should error
// @ts-expect-error
h2ArgProps('div', {}, { tabIndex: 1, badProp: 1 }) // should error// should error

h2ArgStyle('div', undefined)
h2ArgStyle('div', {})
h2ArgStyle('div', {}, { })
h2ArgStyle('div', undefined, { tabIndex: 1 })
// @ts-expect-error
h2ArgStyle('div', undefined, { badProp: 1 }) // should error
// @ts-expect-error
h2ArgStyle('div', {}, { tabIndex: 1, badProp: 1 }) // should error// should error

// Using custom function component
const whyFn = ({ optionalProp, requiredProp }: divHelperProps) =>
	h1('div', {}, { role: optionalProp, tabIndex: requiredProp })

// @ts-expect-error
h1(whyFn, {}) // should error - missing requiredProp
h1(whyFn, {}, { requiredProp: 1 })
// @ts-expect-error
h1(whyFn, {}, { requiredProp: 1, badProp: 1 }) // should error

h2ArgProps(whyFn, undefined)
h2ArgProps(whyFn, {})
// @ts-expect-error
h2ArgProps(whyFn, {}, { }) // should error

h2ArgProps(whyFn, undefined, { requiredProp: 1 })
// @ts-expect-error
h2ArgProps(whyFn, undefined, { tabIndex: 1 })
// @ts-expect-error
h2ArgProps(whyFn, undefined, { badProp: 1 }); // should error
// @ts-expect-error
h2ArgProps(whyFn, undefined, { requiredProp: 1, badProp: 1  }); // should error
// @ts-expect-error
h2ArgProps(whyFn, {}, { tabIndex: 1, badProp: 1 }); // should error

h2ArgStyle(whyFn, undefined)
h2ArgStyle(whyFn, {})
// @ts-expect-error
h2ArgStyle(whyFn, {}, { })// should error - missing order

h2ArgStyle(whyFn, undefined, { order: 1, })
// @ts-expect-error
h2ArgStyle(whyFn, undefined, { tabIndex: 1 }) // should error - missing order, invalid prop?
// @ts-expect-error
h2ArgStyle(whyFn, undefined, { badProp: 1 }); // should error
// @ts-expect-error
h2ArgStyle(whyFn, undefined, { order: 1, badProp: 1,  }); // should error
// @ts-expect-error
h2ArgStyle(whyFn, {}, { tabIndex: 1, badProp: 1 }); // should error// should error
