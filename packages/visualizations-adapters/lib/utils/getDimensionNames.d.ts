import type { Fields } from '../types';
/**
 * This function extracts dimension names from the fields object.
 *
 * @param fields is the Fields response as returned by the SDK
 * @returns an array of strings names
 */
export declare const getDimensionNames: (fields?: Fields) => string[];