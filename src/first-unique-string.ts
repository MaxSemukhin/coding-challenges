// First Unique String
// Given an array of strings, return the first non-repeating string (case-sensitive). If none exists, return undefined.

const array = ['apple', 'banana', 'apple', 'melon', 'cherry', 'peach', 'blueberry', 'cherry', 'banana', 'peach'];

function firstUniqueString(items: string[]): string | undefined {
    // Count how many times each string occurs.
    const count = new Map<string, number>();

    // Iterate over the array: if the string already exists in the Map, increment its count; otherwise, add it to the Map with a count of 1.
    for (const item of items) count.set(item, (count.get(item) ?? 0) + 1);

    // Iterate over the original array to find the first string that appeared only once.
    for (const item of items) if (count.get(item) === 1) return item;

    // Alternative: iterate through the Map. This approach is also valid as Map keeps the insertion order.
    // for (const [key, value] of count) if (value === 1) return key;

    // If none of the strings appeared only once, return undefined.
    return undefined;
}

console.log(firstUniqueString(array));
