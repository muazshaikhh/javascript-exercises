const getTheTitles = function(arr) {
    let b = [];
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        b.push(a.title)
    }
    return b

};

// Do not edit below this line
module.exports = getTheTitles;
