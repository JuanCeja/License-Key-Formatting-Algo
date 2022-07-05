// You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.

// We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

// Return the reformatted license key.

// Example 1:

// Input: s = "5F3Z-2e-9-w", k = 4
// Output: "5F3Z-2E9W"
// Explanation: The string s has been split into two parts, each part has 4 characters.
// Note that the two extra dashes are not needed and can be removed.

let s = "5F3Z-2e-9-w";
let k = 4;

let s1 = "2-5g-3-J";
let k1 = 2;

var licenseKeyFormatting = function(s, k) {
    
    let reversedString = s.split('-').join('').split('').reverse().join('');
    let formatted = [];

    for(let i = 0; i < reversedString.length; i += k){
        formatted.push(reversedString.substr(i,k).split('').reverse().join(''));
        // console.log(reversedString)
        // console.log(formatted)
    }

    return formatted.reverse().join('-').toUpperCase();

};

console.log(licenseKeyFormatting(s,k));
// Output: "5F3Z-2E9W"

console.log(licenseKeyFormatting(s1,k1));
// Output: "2-5G-3J"