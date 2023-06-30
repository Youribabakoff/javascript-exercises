const reverseString = function(string) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        newString = newString + string.charAt(string.length - 1 - i);

    }
    return newString;
};

console.log(reverseString('Youri'));

// Do not edit below this line
module.exports = reverseString;
