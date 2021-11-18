import { ReactElement } from 'react';
import { Component } from './types';
import { hParameters } from './hHelpers';
import { NestedCSSProperties } from 'typestyle/lib/types';
export declare type hhComponent<T extends Component> = (...args: hParameters<T>) => ReactElement;
/**
 * Instantiates a react component, given an html/svg tag name, or a react component, and the
 * following optional arguments, in order:
 * 1) Styles - Either a `Style` object, or a css selector: '.aClass.bClass'
 * 2) Props object - an object containing props to the component
 * 3) children - a list of instantiated child components
 * @param nameOrType
 * @param _args
 */
declare function h<T extends Component, C extends NestedCSSProperties, S extends string>(nameOrType: T, ...args: hParameters<T, C, S>): ReactElement;
declare function hh<T extends Component, C extends NestedCSSProperties, S extends string>(nameOrType: T, name?: string): hhComponent<T>;
export { h, hh };
