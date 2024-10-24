function customarray(...numbers){
    this.numbers = numbers;
}

Object.defineProperty(customarray.prototype,'devlength',{
    get: function() {
        return this.numbers.length - 1;
    }
});

Object.defineProperty(customarray.prototype, 'first',{
    get: function(){
        return this.numbers[0];
    }
});

customarray.prototype.push = function (number){
    this.numbers.push(number+1);
}

let array1 = new customarray(1,2,3,4);
console.log(`Dev length of array is: `,array1.devlength);
array1.push(5);
console.log(`Dev length of array is: `,array1.devlength);
console.log(array1.numbers);
console.log(array1.first);
