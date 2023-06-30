
const removeFromArray = function(array, ...args) {
    let newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray
}

console.log(removeFromArray([1, 2, 3, 4], 3, 4))

/*
 // ... signifies rest parameter syntax, which means it will take the rest of the arguments 
 // provided to the function and make a new array out of it
const removeFromArray = function (array, ...args) {
// next line declares an empty array    
    const newArray = [];
// this line starts a forEach loop over the provided array. For each element in the array, 
// the function takes that element (item) and checks if item is included in the args array.
    array.forEach((item) => {
        // this line uses the includes method to see if item is in args. the not (!) operand
        // is used to negate the result, so if item is not included in args, the condition is true.
        if (!args.includes(item)) {
            // this line adds item to the end of the newArray
            newArray.push(item);
        }
    })

    return newArray

}

console.log(removeFromArray([1, 2, 3, 4], 3)) */

// Do not edit below this line
module.exports = removeFromArray;
