// Valid Anagram
// Given two strings, return true if they are anagrams (same characters with the same frequencies), and false otherwise.

const word1 = 'taste';
const word2 = 'state';

function isAnagram(string1: string, string2: string): boolean {
    // Reject immediately if the strings have different lengths.
    if (string1.length !== string2.length) return false;

    // Split into arrays of characters and sort them.
    const array1 = [...string1].toSorted();
    const array2 = [...string2].toSorted();

    // If all characters match in order, the strings are anagrams.
    return array1.every((value, index) => value === array2[index]);
}

console.log(isAnagram(word1, word2));
