const classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;

interface SelectorObject {
	id?: string
	className?: string
}

/**
 * Parse class names and id from a selector string.
 *
 * ex: (selector: '#someId.someClass.otherClass') => ({ id: 'someId', className: 'someClass otherClass'})
 */
export function parseSelector(selector: string): SelectorObject {
	const parts = selector.split(classIdSplit)
	let classNames = []
	let id: string
	for (let part of parts) {
		if (part.startsWith('#')) id = part.substring(1)
		else if (part.startsWith('.')) classNames.push(part.substring(1))
	}
	const className = classNames.join(' ')

	if (id && className) { return { id, className } }
	if (id) { return { id } }
	if (className) { return { className } }

	return undefined
}
