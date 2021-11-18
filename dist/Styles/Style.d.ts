import { NestedCSSProperties } from 'typestyle/lib/types';
import { SelectorString } from '../types';
/**
 * Encapsulates the name and rules of a typestyle css class into an object in order to
 * 1) Identify it as a CssClass to apply the appropriate class names on the DOM
 * 2) Pass the css rules as style props to React Native components, which don't use css classes
 * TODO: Save memory by not storing the rules when used on the web (might not matter if
 *       this just points to the typestyle object, rather than clones)
 *
 * @typeParam S: An object mapping properties -> rules
 * @typeParam Selector: A string that defines a css selector. Ex: '#someId.someClass.otherClass' or '.aClass'
 */
export declare class Style<CSSProperties extends NestedCSSProperties, Selector extends SelectorString> {
    selector: Selector;
    rules: CSSProperties;
    constructor([cssSelector, cssProperties]: [SelectorString, CSSProperties]);
    static create<CSSProperties extends NestedCSSProperties = {}>(style: [SelectorString, CSSProperties]): Style<CSSProperties, string>;
}
