type NestedObj = Record<string, any>;
declare function matchAndRemoveKeys(obj: NestedObj, pattern?: NestedObj): NestedObj;
export default matchAndRemoveKeys;
