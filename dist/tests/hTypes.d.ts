/// <reference types="react" />
export declare const NoPropFn: () => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export interface OptionalProps {
    optionalProp?: number;
}
export declare const OptionalPropFn: ({ optionalProp }: OptionalProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export interface RequiredProps {
    requiredProp: string;
}
export declare const RequiredPropFn: ({ requiredProp }: RequiredProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export interface FnProps extends OptionalProps, RequiredProps {
}
export declare const Fn: ({ requiredProp, optionalProp }: FnProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
