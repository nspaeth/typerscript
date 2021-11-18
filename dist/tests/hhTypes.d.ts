/// <reference types="react" />
export declare const NoPropFn: () => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export interface OptionalProps {
    optionalProp?: number;
}
export declare const OptionalPropFn: import("../h").hhComponent<({ optionalProp }: OptionalProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>>;
export interface RequiredProps {
    requiredProp: string;
}
export declare const RequiredPropFn: import("../h").hhComponent<({ requiredProp }: RequiredProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>>;
export interface FnProps extends OptionalProps, RequiredProps {
}
export declare const Fn: import("../h").hhComponent<({ requiredProp, optionalProp }: FnProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>>;
