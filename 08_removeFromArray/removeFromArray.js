const removeFromArray = function(arr, ...theArgs) {
    let newArr = arr.filter((arg) => { return !theArgs.includes(arg) } ) 
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
