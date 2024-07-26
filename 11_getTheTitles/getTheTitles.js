const getTheTitles = function(books) {
    let res = [];
    books.forEach(item => {
        res.push(item.title);
    });

    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
