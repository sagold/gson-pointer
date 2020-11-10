import { JSONPointer, JSONPath } from "./types";
/**
 * Deletes a value at specified json-pointer from data
 * Note: input data is modified
 *
 * @param data - input data
 * @param pointer - location of data to remove
 * @param [keepArrayIndices] - if set to `true`, will set array element to undefined (instead of removing it)
 */
export default function pointerDelete<T = any>(data: T, pointer: JSONPointer | JSONPath, keepArrayIndices?: boolean): T;
