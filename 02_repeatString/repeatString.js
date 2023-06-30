

/* const repeatString = function(string, num) {
    let newString = '';
    if (num < 0) {
        return "ERROR"
    } else {
        for (let i = 0; i < num; i++) {
            newString = newString + string;
        }
    }
    return newString
}; */

const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let newString = "";
    for (let i = 0; i < num; i++) {
        newString += string;
    }
    return newString;
}

console.log(repeatString('hey', 3))

// Do not edit below this line
module.exports = repeatString;
