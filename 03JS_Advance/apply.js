let nums = [1,2,3,4,5,6];

// fn.apply(null, args) is equivalent to fn(...args)
// the args should be an array object in case 1 and
// an iterable in case 2

// const minNums = Math.min.apply(null, nums);
// console.log(minNums);
// const maxNums = Math.max.apply(null, nums);
// console.log(maxNums);

// Syntax to spread the array
 console.log(...nums)