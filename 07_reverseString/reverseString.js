const reverseString = function(string) {
    let newStr = ""
    if (string === newStr) { return newStr }
    let arr = string.split("")

    for (let i = string.length - 1; i >= 0; i--) {
        newStr += arr[i]
    }
    return newStr
};

// Do not edit below this line
module.exports = reverseString;
