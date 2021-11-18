import { Component } from './types'
/**
 * Returns the displayname of a component.
 */
export const getDisplayName = <T extends Component>(component: T, name?: string): string => {
	if (name) return name
	if (typeof component === 'string') return component
	if (!component) return 'Empty'
	if (component.displayName) return component.displayName
	if (component.name) return component.name
	// if (component.type) return component.type
	else
		return 'Unknown'
}

export const setDisplayName = <T extends Component>(displayName: string, component: T): T => {
	// if (component.displayName)
	// 	console.error(`hh: Overriding name: '${component.displayName}' with '${displayName}'`)
	// if (typeof component === 'string' && component !== displayName)
	// 	console.error(`hh: Overriding name: '${component}' with '${displayName}'`)
	// if (!displayName || displayName === 'Unknown')
	// 	console.error('hh: Unknown', component);

	if (component) {
		component.displayName = displayName;
		// component.name = displayName;
	} else {
		console.warn('Undefined component!')
	}
	// component.whyDidYouRender = true
	return component
}
