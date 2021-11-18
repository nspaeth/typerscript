import { ReactNode, ComponentType } from 'react';
export declare type Children = Readonly<ReactNode[]>;
export interface Selector {
    id?: string;
    className?: string;
}
export declare type SelectorString = string;
export declare type ClassSelector<T extends string> = `.${T}`;
export declare type IDSelector<T extends string> = `#${T}`;
export declare type CSSSelector<T extends string> = IDSelector<T> | ClassSelector<T>;
export declare type Tag = keyof JSX.IntrinsicElements;
export declare type Component = ComponentType<any> | Tag;
export declare type Keys<T> = Extract<keyof T, string>;
export declare type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];
