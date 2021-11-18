// import { IClass, Styling, Style } from './createClass'
export { Styles, Style } from './Styles'
export { h, hh } from './h'
import { Styles } from './Styles'
export const createClasses = Styles


// This avoids allocating new empty objects all the time
const EmptyObject = Object.freeze({})
const objIsLocked = (obj: any) =>
	!Object.isExtensible(obj) || Object.isFrozen(obj) || Object.isSealed(obj)

const startsWith = (str: string, start: string) => str[0] === start
// const isValidString = param => typeof param === 'string' && param.length > 0
// const isValidSelector = param => isValidString(param) && (startsWith(param, '.') || startsWith(param, '#'))
// isSelectorOrStyle = param => isValidString(param) || isStyleObject(param)

// const Styling = <T extends IClass>(styles: T) => Styling<T>(styles)

