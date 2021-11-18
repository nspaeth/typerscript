import { NestedCSSProperties } from 'typestyle/lib/types';
import { Style } from './Style';
import { Keys } from '../types';
/**
 * Transforms an object mapping [typestyles selector]: { ...typestyle-css-definitons }
 * into an object mapping [typestyle selector]: `Style` objects.
 * These `Style` objects are used by `h` to
 *   1) Identify arguments that are meant to be css styles
 *   2) Pass typestyle objects to `React.createElement` as human readable classNames
 *
 * @param classes
 */
export declare const Styles: <S extends Styling<{}> = {}>(classes: S) => Styles<S>;
export declare type Styling<S extends {} = {}> = {
    [selectorString in keyof S]: selectorString extends Keys<S> ? NestedCSSProperties : never;
};
/**
 * Represents an indexed object of [selector]: Style
 */
export declare type Styles<style extends Styling = {}> = {
    [selectorString in keyof style]: selectorString extends Keys<style> ? Style<style[selectorString], selectorString> : never;
};
/**
 * A helper for creating a Style, populated with a
 */
