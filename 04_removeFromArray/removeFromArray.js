const removeFromArray = function(array, ...toRemove) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      if (!toRemove.includes(array[i])) {
        newArr.push(array[i]);
      }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
