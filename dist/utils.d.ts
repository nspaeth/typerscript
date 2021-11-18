/// <reference types="react" />
import { Style } from './Styles';
export declare type filterObjectPredicate = (value: any, key: string) => boolean;
export declare function filterObject(obj: Record<string, any>, predicate: filterObjectPredicate): {
    [x: number]: {
        [x: string]: any;
    };
    length: number;
    toString(): string;
    toLocaleString(): string;
    pop(): {
        [x: string]: any;
    };
    push(...items: {
        [x: string]: any;
    }[]): number;
    concat(...items: ConcatArray<{
        [x: string]: any;
    }>[]): {
        [x: string]: any;
    }[];
    concat(...items: ({
        [x: string]: any;
    } | ConcatArray<{
        [x: string]: any;
    }>)[]): {
        [x: string]: any;
    }[];
    join(separator?: string): string;
    reverse(): {
        [x: string]: any;
    }[];
    shift(): {
        [x: string]: any;
    };
    slice(start?: number, end?: number): {
        [x: string]: any;
    }[];
    sort(compareFn?: (a: {
        [x: string]: any;
    }, b: {
        [x: string]: any;
    }) => number): {
        [x: string]: any;
    }[];
    splice(start: number, deleteCount?: number): {
        [x: string]: any;
    }[];
    splice(start: number, deleteCount: number, ...items: {
        [x: string]: any;
    }[]): {
        [x: string]: any;
    }[];
    unshift(...items: {
        [x: string]: any;
    }[]): number;
    indexOf(searchElement: {
        [x: string]: any;
    }, fromIndex?: number): number;
    lastIndexOf(searchElement: {
        [x: string]: any;
    }, fromIndex?: number): number;
    every<S extends {
        [x: string]: any;
    }>(predicate: (value: {
        [x: string]: any;
    }, index: number, array: {
        [x: string]: any;
    }[]) => value is S, thisArg?: any): this is S[];
    every(predicate: (value: {
        [x: string]: any;
    }, index: number, array: {
        [x: string]: any;
    }[]) => unknown, thisArg?: any): boolean;
    some(predicate: (value: {
        [x: string]: any;
    }, index: number, array: {
        [x: string]: any;
    }[]) => unknown, thisArg?: any): boolean;
    forEach(callbackfn: (value: {
        [x: string]: any;
    }, index: number, array: {
        [x: string]: any;
    }[]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: {
        [x: string]: any;
    }, index: number, array: {
        [x: string]: any;
    }[]) => U, thisArg?: any): U[];
    filter<S_1 extends {
        [x: string]: any;
    }>(predicate: (value: {
        [x: string]: any;
    }, index: number, array: {
        [x: string]: any;
    }[]) => value is S_1, thisArg?: any): S_1[];
    filter(predicate: (value: {
        [x: string]: any;
    }, index: number, array: {
        [x: string]: any;
    }[]) => unknown, thisArg?: any): {
        [x: string]: any;
    }[];
    reduce(callbackfn: (previousValue: {
        [x: string]: any;
    }, currentValue: {
        [x: string]: any;
    }, currentIndex: number, array: {
        [x: string]: any;
    }[]) => {
        [x: string]: any;
    }): {
        [x: string]: any;
    };
    reduce(callbackfn: (previousValue: {
        [x: string]: any;
    }, currentValue: {
        [x: string]: any;
    }, currentIndex: number, array: {
        [x: string]: any;
    }[]) => {
        [x: string]: any;
    }, initialValue: {
        [x: string]: any;
    }): {
        [x: string]: any;
    };
    reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: {
        [x: string]: any;
    }, currentIndex: number, array: {
        [x: string]: any;
    }[]) => U_1, initialValue: U_1): U_1;
    reduceRight(callbackfn: (previousValue: {
        [x: string]: any;
    }, currentValue: {
        [x: string]: any;
    }, currentIndex: number, array: {
        [x: string]: any;
    }[]) => {
        [x: string]: any;
    }): {
        [x: string]: any;
    };
    reduceRight(callbackfn: (previousValue: {
        [x: string]: any;
    }, currentValue: {
        [x: string]: any;
    }, currentIndex: number, array: {
        [x: string]: any;
    }[]) => {
        [x: string]: any;
    }, initialValue: {
        [x: string]: any;
    }): {
        [x: string]: any;
    };
    reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: {
        [x: string]: any;
    }, currentIndex: number, array: {
        [x: string]: any;
    }[]) => U_2, initialValue: U_2): U_2;
    find<S_2 extends {
        [x: string]: any;
    }>(predicate: (this: void, value: {
        [x: string]: any;
    }, index: number, obj: {
        [x: string]: any;
    }[]) => value is S_2, thisArg?: any): S_2;
    find(predicate: (value: {
        [x: string]: any;
    }, index: number, obj: {
        [x: string]: any;
    }[]) => unknown, thisArg?: any): {
        [x: string]: any;
    };
    findIndex(predicate: (value: {
        [x: string]: any;
    }, index: number, obj: {
        [x: string]: any;
    }[]) => unknown, thisArg?: any): number;
    fill(value: {
        [x: string]: any;
    }, start?: number, end?: number): {
        [x: string]: any;
    }[];
    copyWithin(target: number, start: number, end?: number): {
        [x: string]: any;
    }[];
    entries(): IterableIterator<[number, {
        [x: string]: any;
    }]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<{
        [x: string]: any;
    }>;
    includes(searchElement: {
        [x: string]: any;
    }, fromIndex?: number): boolean;
    flatMap<U_3, This = undefined>(callback: (this: This, value: {
        [x: string]: any;
    }, index: number, array: {
        [x: string]: any;
    }[]) => U_3 | readonly U_3[], thisArg?: This): U_3[];
    flat<A, D extends number = 1>(this: A, depth?: D): FlatArray<A, D>[];
    [Symbol.iterator](): IterableIterator<{
        [x: string]: any;
    }>;
    [Symbol.unscopables](): {
        copyWithin: boolean;
        entries: boolean;
        fill: boolean;
        find: boolean;
        findIndex: boolean;
        keys: boolean;
        values: boolean;
    };
    at(index: number): {
        [x: string]: any;
    };
};
export declare const isStyleObject: (param: unknown) => param is Style<any, any>;
export declare const isSelector: (param: unknown) => param is string;
export declare const isChildren: (param: unknown) => param is readonly import("react").ReactNode[];
export declare const isProps: <P>(param: unknown) => param is P;
export declare const entries: <T>(o: T) => [any, T[any]][];
export declare const fromEntries: <T>(o: T) => {
    [k: string]: T;
};
export declare type MapEntry<Key = any, Value = any, OutO = any> = (value: Value, key: Key) => OutO;
export declare const mapEntries: <InO extends {}, Key extends Extract<keyof InO, string>, Value extends InO[Key], OutO>(o: InO, fn: (value: Value, key: Key) => OutO) => (readonly [Key, OutO])[];
export declare const mapValues: <InO extends {}, Key extends Extract<keyof InO, string>, Value extends InO[Key], OutO>(o: InO, fn: (value: Value, key: Key) => OutO) => {
    [k: string]: (readonly [Key, OutO])[];
};
