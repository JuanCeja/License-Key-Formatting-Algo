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
