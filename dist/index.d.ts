export { Styles, Style } from './Styles';
export { h, hh } from './h';
import { Styles } from './Styles';
export declare const createClasses: <S extends import("./Styles").Styling<{}> = {}>(classes: S) => Styles<S>;
