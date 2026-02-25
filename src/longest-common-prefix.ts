// Longest Common Prefix
// Given an array of strings, return the longest prefix shared by all strings. If none exists, return an empty string.

const array = ['interview', 'internet', 'internal'];

function longestCommonPrefix(words: string[]): string {
    // Initialize the longest common prefix with an empty string.
    let longest_common_prefix = '';
    let index = 0;

    // Form an array of characters from any word.
    const chars = words[0] ? [...words[0]] : [];

    // Function to get a prefix of a given length.
    const getPrefix = (limit: number): string => {
        return chars.slice(0, limit + 1).join('');
    };

    // Iterate over the array of words to find the longest common prefix. The longest common prefix updates until every word starts with the same prefix.
    while (index < chars.length && words.every((word) => word.startsWith(getPrefix(index)))) {
        longest_common_prefix = getPrefix(index);
        index++;
    }

    return longest_common_prefix;
}

console.log(longestCommonPrefix(array));
