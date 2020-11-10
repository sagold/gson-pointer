import split from "./split";
import get from "./get";
import removeUndefinedItems from "./removeUndefinedItems";
import { JSONPointer, JSONPath } from "./types"


/**
 * Deletes a value at specified json-pointer from data
 * Note: input data is modified
 *
 * @param data - input data
 * @param pointer - location of data to remove
 * @param [keepArrayIndices] - if set to `true`, will set array element to undefined (instead of removing it)
 */
export default function pointerDelete<T = any>(data: T, pointer: JSONPointer|JSONPath, keepArrayIndices?: boolean): T {
	const properties = split(pointer);
	const lastProperty = properties.pop();
	const target = get(data, properties);
	if (target) {
		delete target[lastProperty];
	}
	if (Array.isArray(target) && keepArrayIndices !== true) {
		removeUndefinedItems(target);
	}
	return data;
}
