// const names = ["Aditya","Abhinav","Aditi","Aarav","Ayush"];

// const eachName = names.forEach((name)=>{
//     console.log(name)
// })
// // undefined
// console.log(eachName); 

const nums = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]

// filter also takes a callback
// const newNums = nums.filter( (num)=> num>5)

// If arrow function is using prenthesis it automatically  returns
// but if arrow function is using curly braces we need to explicit return
// const newNums = nums.filter( (num)=> {
//     return num>3;
// })

// console.log(newNums);

// Using for each
const newNums2 = [];
nums.forEach( (num) => {
    if(num>4){
        newNums2.push(num);
    }
})
console.log(newNums2)