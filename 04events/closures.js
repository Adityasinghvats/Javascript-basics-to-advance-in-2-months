// closure are functions and remember their environment
function outer(){
    let counter = 4;
    return function(){
        counter++;
        return counter;
    }
}

// holding refernce to inner function
let count = outer();
// executing inner function
console.log(count());
console.log(count());
console.log(count());
console.log(count());