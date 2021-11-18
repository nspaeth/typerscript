import { Children, Keys } from './types'
import { Style } from './Styles'

export type filterObjectPredicate = (value: any, key: string) => boolean
export function filterObject(obj: Record<string, any>, predicate: filterObjectPredicate) {
	return {
		...Object.keys(obj)
			.filter(key => predicate(obj[key], key))
			.map((key: string) => ({ [key]: obj[key] }))
	}
}

export const isStyleObject = (param: unknown): param is Style<any,any> => param instanceof Style
export const isSelector = (param: unknown): param is string => typeof param === 'string'
export const isChildren = (param: unknown): param is Children => Array.isArray(param)
export const isProps = <P>(param: unknown): param is P => typeof param === 'object' && !isChildren(param)

//entries(o: {}): [string, any][];
type entries<T extends {}, K extends keyof T = any> = (o: T) => [
	K, T[K]
][];
export const entries = <T>(o: T) => (Object.entries as entries<T>)(o)

type fromEntries<T = any> = (entries: Iterable<readonly [PropertyKey, T]>) => {
	[k: string]: T
}
export const fromEntries = <T>(o: T) => (Object.fromEntries as fromEntries<T>)(o);


export type MapEntry<
	Key = any,
Value = any,
OutO = any,
	> = (value: Value, key: Key) => OutO

// <Key extends Keys<InO>>
export const mapEntries = <
	InO extends {},
Key extends Keys<InO>,
Value extends InO[Key],
OutO,
	>(o: InO, fn: (value: Value, key: Key) => OutO) =>
	entries(o)
		.map(
			([ key, value ]: [ key: Key, value: Value ]): readonly [ Key, OutO ] => [
				key,
				fn(value, key)
			] as const
		)

export const mapValues = <
	InO extends {},
Key extends Keys<InO>,
Value extends InO[Key],
OutO
	>(o: InO, fn: (value: Value, key: Key) => OutO) =>
	fromEntries(
	  mapEntries(o, fn)
  )



// const l = mapEntries({a: 1, b: 2}, (value) => value === 1 ? ['a'] : 2)


// const x = mapValues({ a: 1 }, (value) => 'a')
// type m = typeof x

// const f = fromEntries(x)
// type n = typeof f

