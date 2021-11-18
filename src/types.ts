import { ReactNode, ComponentType } from 'react'
import { Style } from './Styles'

export type Children = Readonly<ReactNode[]>
// export type ComponentCreationSelector = string // 'div' + '#id'? + '.class'? + '.class'...?
export interface Selector {
	id?: string
	className?: string
}

export type SelectorString = string

export type ClassSelector<T extends string> = `.${T}`
export type IDSelector<T extends string> = `#${T}`
export type CSSSelector<T extends string> = IDSelector<T> | ClassSelector<T>

// h parameters
// export type hParameterTypes<Props> = string | Style | Props | Children
// export type AllArgs<Props> = [ Selector|Style, Props, Children ]
// export type TwoArgsWithStyling<Props> = [ Selector|Style, Props|Children ]
// export type TwoArgsWithoutStyling<Props> = [ Props, Children ]
// export type OneArg<Props> = [ Selector|Style|Props|Children ]
// export type hVariableArgTypes<Props> =
// 	AllArgs<Props> | TwoArgsWithStyling<Props> | TwoArgsWithoutStyling<Props> | OneArg<Props> | []

export type Tag = keyof JSX.IntrinsicElements
export type Component = ComponentType<any> | Tag;
// export type NameOrType = Component | String

// Utility types
export type Keys<T> = Extract<keyof T, string>

export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K>
		? never
		: K;
}[keyof T];

// export type Component
