const sumAll = function (oneInt, twoInt) {
    if (typeof oneInt !== 'number' || typeof twoInt !== 'number' || 
         oneInt < 0 || twoInt < 0) {
        return 'ERROR';
    } else {
        let sum = 0;
        let lower = Math.min(oneInt, twoInt);
        let upper = Math.max(oneInt, twoInt);

        for (let i = lower; i <= upper; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
