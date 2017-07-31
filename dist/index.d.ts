export declare class Style {
    selector: string;
    rules: Object;
    constructor({selector, rules}: {
        selector: string;
        rules: object;
    });
}
declare class Classes {
    [index: string]: Style;
    constructor(classes: object[]);
}
declare const hh: (nameOrType: any) => (...args: any[]) => any;
declare const h: (nameOrType: any, ...rest: any[]) => any;
declare const createTag: (h: any) => (tagName: any) => (...args: any[]) => any;
export { h, hh, createTag, Classes };
