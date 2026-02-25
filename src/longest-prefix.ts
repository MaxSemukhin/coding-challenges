// Longest Prefix
// Given an array of strings, return the longest prefix shared by at least two strings.
// If no prefix is shared by two or more strings, return an empty string.
// Edge case: If there are 2 longest prefixes, then return the first that appears in an original array.

const array = ['billing', 'billion', 'bill', 'build', 'building', 'finance', 'judge', 'judgement'];

function longestPrefix(words: string[]): string {
    // Count how many times each prefix occurs.
    const prefixes = new Map<string, number>();

    // Iterate over the prefixes of each word and add them to the Map.
    for (const word of words) {
        let prefix = '';
        for (const char of word) {
            // Add up to the current character to the prefix.
            prefix += char;
            // If the prefix already exists in the Map, increment its count; otherwise, add it to the Map with a count of 1.
            prefixes.set(prefix, (prefixes.get(prefix) ?? 0) + 1);
        }
    }

    // Default to an empty string if no prefix is shared by two or more strings.
    let longest_prefix = '';

    // Iterate over the Map to find the longest prefix that occurs more than once.
    for (const [key, value] of prefixes) if (value > 1 && key.length > longest_prefix.length) longest_prefix = key;

    return longest_prefix;
}

console.log(longestPrefix(array));
