interface SelectorObject {
    id?: string;
    className?: string;
}
/**
 * Parse class names and id from a selector string.
 *
 * ex: (selector: '#someId.someClass.otherClass') => ({ id: 'someId', className: 'someClass otherClass'})
 */
export declare function parseSelector(selector: string): SelectorObject;
export {};
