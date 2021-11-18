import * as React from 'react'
import { ComponentSpecifier, Children } from './types'

export function createElement(
	nameOrType: Specifier,
	properties: Props,
	children: Children = []) {
	return Array.isArray(children)
		? React.createElement(nameOrType, properties, children)
		: React.createElement(nameOrType, properties)
}
