import { Component } from './types';
/**
 * Returns the displayname of a component.
 */
export declare const getDisplayName: <T extends Component>(component: T, name?: string) => string;
export declare const setDisplayName: <T extends Component>(displayName: string, component: T) => T;
