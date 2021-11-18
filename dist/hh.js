"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type Props = (
// 	T extends ReactHTMLElement ? HTMLAttributes<T> :
// 		T extends Element ? DOMAttributes<T> :
// 		T extends 'input' ? (InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> | null) :
// 		T extends StatelessComponent<P> ? Attributes & P :
// 		T extends Function ? Attributes & P :
// 		// T extends SFC<P> ? Attributes & P :
// 		T extends ComponentClass<P> ? Attributes & P :
// 		T extends ComponentWState<P> ? ClassAttributes<ClassicComponent<P, ComponentState>> & P | null :
// 		ClassAttributes<T> & P | null
// )
/**
 * Instantiates a react component, given an html/svg tag name, or a react component, and the
 * following optional arguments, in order:
 * 1) Styling - Either a `Style` object, or a css selector: '.aClass.bClass'
 * 2) Props object - an object containing props to the component
 * 3) children - a list of instantiated child components
 * @param nameOrType
 * @param _args
 */
// function hh<T extends Component, S extends Style>(nameOrType: T) {
// 	/**
// 	 * Instantiates a react component, given an html/svg tag name, or a react component, and the
// 	 * following optional arguments, in order:
// 	 * 1) Styling - Either a `Style` object, or a css selector: '.aClass.bClass'
// 	 * 2) Props object - an object containing props to the component
// 	 * 3) children - a list of instantiated child components
// 	 * @param nameOrType
// 	 * @param _args
// 	 */
// 	// return (...args: hParameters<T, S>): ReactElement => h(nameOrType, ...args)
// 	return (...args: hVariableArgTypes<Props>) => h(nameOrType, ...args)
// }
//# sourceMappingURL=hh.js.map