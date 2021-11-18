import { Styles } from '../Styles'
import { h } from '../h'
import { Box as _Box } from '@mui/material'
export const styleProp = { style: { marginTop: '1px' } }


// export const wrongProps = { ...optionalProps, ...styleProp }
interface MakeProps<R,O,I> {
	requiredProps?: R
	optionalProps?: O
	invalidProps?: I
}

export const makeProps = <R,O,I>({requiredProps, optionalProps, invalidProps}: MakeProps<R, O, I>) => {
	const validProps = { ...requiredProps, ...optionalProps }

	// const invalidProps = {
	// 	requiredProp2: 'string',
	// 	requiredProp3: 1,
	// 	optionalProp1: 'string',
	// 	optionalProp2: 1,
	// }
	const extraProp = { extraProp: 1 }
	const wrongProps = { ...extraProp, ...invalidProps }
	const wrongValidProps = { ...wrongProps, ...validProps }
	const validWrongProps = { ...validProps, ...wrongProps }
	return {
		requiredProps, optionalProps, validProps,
		invalidProps, wrongProps, extraProp,
		validWrongProps, wrongValidProps,
	}
}

export const baseStyles = { Flex: { marginTop: 1 } }
export const S = Styles(baseStyles)
export const css = S.Flex

export const validChildren = [
	undefined,
	[],
	['content'],
	[h('div')],
	[h(_Box)],
	[h(() => h(_Box))],
	// [h(() => 'content')],
]
