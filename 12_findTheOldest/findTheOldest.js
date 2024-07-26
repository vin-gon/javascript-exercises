const findTheOldest = function(arr) {
    let oldestAge = arr.reduce((oldest, item) => {
        let age;
        if (item.yearOfDeath === undefined) {
            age = (new Date()).getFullYear() - item.yearOfBirth;
        }
        else {
            age = item.yearOfDeath - item.yearOfBirth;
        }
        
        return (age > oldest ? age : oldest);
    }, 0);

    return arr.find(item => {
        return (item.yearOfDeath - item.yearOfBirth == oldestAge ||
            (new Date()).getFullYear() - item.yearOfBirth == oldestAge)

    });

};

// Do not edit below this line
module.exports = findTheOldest;
