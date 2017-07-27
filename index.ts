import * as React from 'react'
import { style as typeStyle } from 'typestyle'

class Style {
	selector: string;
	rules: object;
	constructor({selector, rules}) {
		const firstChar = selector[0]
		this.selector = firstChar === '.' || firstChar === '#' ? selector : '.' + selector
		this.rules = rules
	}
}

class Classes {
	constructor(classes) {
		Object.entries(classes).forEach(([key, val]) => {
			const selector = __IS_NATIVE__ ? key : typeStyle(val)
			this[key] = new Style({
				rules: val,
				selector,
			})
		})
	}
}

const isValidString = param => typeof param === 'string' && param.length > 0
const startsWith = (string, start) => string[0] === start
const isValidSelector = param => isValidString(param) && (startsWith(param, '.') || startsWith(param, '#'))
const isStyleObject = param => param instanceof Style
// isSelectorOrStyle = param => isValidString(param) || isStyleObject(param)
const isSelector = param => typeof param === 'string'
const isChildren = Array.isArray

const classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/
function parseSelector(selector) {
	const parts = selector.split(classIdSplit)
	let className = []
	let id = ''
	for (let part of parts) {
		if (part.startsWith('#')) id = part.substring(1)
		else if (part.startsWith('.')) className.push(part.substring(1))
	}

	return { id, className: className.join(' ') }
}

function createElement(nameOrType, properties = {}, children = []) {
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
const hh = nameOrType => (...args) => {
	let selector: Object, props: Object, children: Array, rules: Object
	let id: String, className: String
	let arg = 0
	if (isSelector(args[arg])) {
		selector = parseSelector(args[arg])
		{ id, className } = selector
		arg++
	} else if (isStyleObject(args[arg])) {
		selector = parseSelector(args[arg].selector)
		if (__IS_NATIVE__) {
			rules = Object.assign({}, args[arg].rules
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

const h = (nameOrType, ...rest) => hh(nameOrType)(...rest)
const createTag = h => tagName => (...args) => {
	const [first, ...rest] = args
	if (args.length === 0) return h(tagName)
	if (isSelector(first)) return h(tagName + first, ...rest)
	return h(tagName, first, ...rest)
}

export { h, hh, Classes, Style, createTag, }