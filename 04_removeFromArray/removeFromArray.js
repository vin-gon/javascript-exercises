const removeFromArray = function(arr, ...args) {
    let res = [];
    for (let i = 0; i < arr.length; ++i)
    {
        let removeElement = false;
        for (let j = 0; j < args.length; ++j)
        {
            if (arr[i] === args[j])
            {
                removeElement = true;
            }
        }
        if (!removeElement)
        {
            res.push(arr[i]);
        }
    }

    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
