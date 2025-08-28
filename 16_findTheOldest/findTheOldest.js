const findTheOldest = function(arr) {
    let present = 2025;
    let currentMax = {name: "null", age: 0};
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = present;
        }

        let b = a.yearOfDeath - a.yearOfBirth;
        if (b >= currentMax.age) {
            currentMax.name = a.name;
            currentMax.age = b;
        }
    }
    return currentMax;
};

// Do not edit below this line
module.exports = findTheOldest;
