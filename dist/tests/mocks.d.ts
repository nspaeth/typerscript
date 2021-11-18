/// <reference types="react" />
import { Styles } from '../Styles';
export declare const styleProp: {
    style: {
        marginTop: string;
    };
};
interface MakeProps<R, O, I> {
    requiredProps?: R;
    optionalProps?: O;
    invalidProps?: I;
}
export declare const makeProps: <R, O, I>({ requiredProps, optionalProps, invalidProps }: MakeProps<R, O, I>) => {
    requiredProps: R;
    optionalProps: O;
    validProps: R & O;
    invalidProps: I;
    wrongProps: {
        extraProp: number;
    } & I;
    extraProp: {
        extraProp: number;
    };
    validWrongProps: R & O & {
        extraProp: number;
    } & I;
    wrongValidProps: {
        extraProp: number;
    } & I & R & O;
};
export declare const baseStyles: {
    Flex: {
        marginTop: number;
    };
};
export declare const S: Styles<{
    Flex: {
        marginTop: number;
    };
}>;
export declare const css: import("../Styles").Style<{
    marginTop: number;
}, "Flex">;
export declare const validChildren: (string[] | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[])[];
export {};
