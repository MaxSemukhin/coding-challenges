// Remove Duplicates, Keep Order
// Given an array of strings, return a new array with duplicates removed while preserving the order of first appearance.

const array = ['login', 'view', 'view', 'register', 'login', 'checkout', 'view', 'checkout'];

function removeDuplicates(items: string[]): string[] {
    // Set preserves insertion order and stores unique values.
    return [...new Set(items)];
}

console.log(removeDuplicates(array));
