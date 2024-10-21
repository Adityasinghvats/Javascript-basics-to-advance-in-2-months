function* generateNumber(){
    // it generates based on calling it ,
    //  based on call generates value one after other
    // It can remember how much it was called
    yield 1;
    yield 2;
    yield 3;
}

const nums = generateNumber();
const num2 = generateNumber();

console.log(nums.next().value);
console.log(nums.next().value);
console.log(nums.next().value);
// console.log(nums.next().value); -> undefined

console.log(num2.next().value);
console.log(num2.next().value);

// next() is an iterator , along with generate function it is a generator