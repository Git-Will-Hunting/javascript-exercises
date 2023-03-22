const removeFromArray = function(arr, args) {
    // remove the selected items from the array
    for (let i = 1; i < arguments.length; i++) {
        const index = arr.indexOf(arguments[i]);
        // if the item is in the array, remove it
        if (index > -1)
            arr.splice(index, 1);
    }
    
    // return the modified array
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
