import { PropsWithChildren, ComponentType, Attributes, ReactElement } from 'react';
import { Children, RequiredKeys, Component } from './types';
import { Style } from './Styles';
import { NestedCSSProperties } from 'typestyle/lib/types';
export declare type Css<S extends NestedCSSProperties, Selector extends string> = string | Style<S, Selector>;
export declare type SelectorProps = {
    id?: string;
    className?: string;
} | undefined;
export declare type Props<T> = T extends ComponentType<infer P> ? P extends object ? PropsWithChildren<P> & Attributes : never : T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : never;
export declare type H1 = [Children: Children] | [];
export declare type H2PropsOnly<T> = [Props: Props<T>];
export declare type H2PropsAndChildren<T> = [Props: Props<T>, Children?: Children];
export declare type H2Props<T extends Component> = H2PropsAndChildren<T> | H2PropsOnly<T> | H1;
export declare type H2StyleOnly<C, S extends string> = [Style: Css<C, S>];
export declare type H2StyleAndChildren<C, S extends string> = [Style: Css<C, S>, Children?: Children];
export declare type H2Style<C, S extends string> = H2StyleAndChildren<C, S> | H2StyleOnly<C, S> | H1;
export declare type H2<T extends Component, C, S extends string> = H2Style<C, S> | H2Props<T>;
export declare type H3All<T extends Component, C, S extends string> = [Style: Css<C, S>, Props: Props<T>, Children: Children];
export declare type H3<T extends Component, C, S extends string> = H3All<T, C, S> | [Style: Css<C, S>, ...rest: H2Props<T>] | H2Props<T>;
export declare type H<T extends Component, C, S extends string> = H3<T, C, S> | H2<T, C, S> | H1;
export declare type NonPropArgs<C, S extends string> = [
    Style: Css<C, S>,
    Children: Children
] | [Style: Css<C, S>] | [Children: Children] | [];
export declare type PropArgs<T extends Component, C, S extends string> = [
    Style: Css<C, S>,
    Props: Props<T>,
    Children: Children
] | [Style: Css<C, S>, Props: Props<T>] | [Props: Props<T>, Children: Children] | [Props: Props<T>];
export declare type hParameters<T extends Component = any, C = any, S extends string = any> = RequiredKeys<Props<T>> extends never ? PropArgs<T, C, S> | NonPropArgs<C, S> : PropArgs<T, C, S>;
export declare function h1<T extends Component, C, S extends string>(name: T, style: SelectorProps, props: Props<T>, children?: Children): ReactElement;
export declare function h2ArgProps<T extends Component, C, S>(name: T, selector: SelectorProps, propsOrChildren?: Props<T> | Children, children?: Children): ReactElement;
export declare function h2ArgStyle<T extends Component, C, S extends string>(name: T, selector?: SelectorProps, ...args: H2Props<T>): ReactElement<any, string | import("react").JSXElementConstructor<any>>;
