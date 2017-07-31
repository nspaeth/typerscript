import * as React from 'react'
import { style as typeStyle } from 'typestyle'
const __ = { IS_NATIVE__: false }
// declare var process: any;
// declare var __: {IS_NATIVE__: boolean}
// try { if (!__) {} }
// catch(e) {
// 	let __ = {IS_NATIVE__: false}
// }

interface Selector {
	id?: string;
	className?: string;
}

export class Style {
	selector: string;
	rules: Object;
	constructor({selector, rules}: {selector: string, rules: object}) {
		const firstChar = selector[0]
		this.selector = firstChar === '.' || firstChar === '#' ? selector : '.' + selector
		this.rules = rules
	}
}

class Classes {
	[index: string]: Style
	constructor(classes: object) {
		Object.entries(classes).forEach(([key, val]) => {
			const selector = __.IS_NATIVE__ ? key : typeStyle(val)
			this[key] = new Style({
				rules: val,
				selector,
			})
		})
	}
}

//const isValidString = param => typeof param === 'string' && param.length > 0
const startsWith = (str: string, start: string) => str[0] === start
//const isValidSelector = param => isValidString(param) && (startsWith(param, '.') || startsWith(param, '#'))
const isStyleObject = (param: any) => param instanceof Style
// isSelectorOrStyle = param => isValidString(param) || isStyleObject(param)
const isSelector = (param: any) => typeof param === 'string'
const isChildren = Array.isArray

const classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/
function parseSelector(selector: string) {
	const parts = selector.split(classIdSplit)
	let className = []
	let id = ''
	for (let part of parts) {
		if (part.startsWith('#')) id = part.substring(1)
		else if (part.startsWith('.')) className.push(part.substring(1))
	}

	return { id, className: className.join(' ') }
}

function createElement(nameOrType: any, properties:any={isRendered: true}, children:any[]=[]) {
	const { isRendered, ...props } = properties
	if (!isRendered && isRendered !== undefined) return null

	const args = [nameOrType, props]
	if (!Array.isArray(children)) {
		args.push(children)
	} else {
		args.push(...children)
	}

	return React.createElement.apply(React, args)
}

const EmptyObject = {}
// first?: String|Style|Object|Array, second?: Object|Array, third?: Array
const hh = (nameOrType: any) => (...args: any[]) => {
	let selector: Selector, children: any[], rules: object
	let props: {[index:string]: any}
	//let id: String, className: String
	let arg = 0
	if (isSelector(args[arg])) {
		selector = parseSelector(args[arg])
		const { id, className } = selector
		arg++
	} else if (isStyleObject(args[arg])) {
		selector = parseSelector(args[arg].selector)
		if (__.IS_NATIVE__) {
			rules = Object.assign({}, args[arg].rules)
		}
		arg++
	} else selector = EmptyObject

	if (typeof args[arg] === 'object' && !isChildren(args[arg])) {
		props = args[arg]
		arg++
	} else props = {}

	if (isChildren(args[arg])) {
		children = args[arg]
	}

	if (rules) {
		props.style = { ...rules, ...(props.style || {}) }
	}

	props = { ...props, ...selector }
	return createElement(nameOrType, props, children)
}

const h = (nameOrType:any, ...rest:any[]) => hh(nameOrType)(...rest)
const createTag = (h:any) => (tagName:any) => (...args:any[]) => {
	const [first, ...rest] = args
	if (args.length === 0) return h(tagName)
	if (isSelector(first)) return h(tagName + first, ...rest)
	return h(tagName, first, ...rest)
}

export { h, hh, createTag, Classes }
