// accumulator is a empty value
// acts just like a prefix sum
// after comma we give the initial value
const nums = [1 ,2 , 4, 5, 6, 7, 8, 9, 10]

// sum of entire array in oneshot
const n = nums.reduce( (accumulator,currentValue) => {
    console.log(`${accumulator}`)
    return accumulator + currentValue
} , 0)
console.log(n);
