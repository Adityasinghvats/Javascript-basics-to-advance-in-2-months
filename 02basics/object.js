const user = {
    name:"Aditya",
    surname:"kumar",
    greet(){
        console.log(`Welcome ${this.name} ${this.surname}`);
    }
}

// user.greet()

// console.log(Object.entries(user))
// [ [ 'name', 'Aditya' ], [ 'surname', 'kumar' ] ]

// console.log(Object.values(user))
// [ 'Aditya', 'kumar' ]

// console.log(user['name'])
console.log(Object.keys(user));

// user.greeting = function (){
//     console.log(`Welcome ${this.name}`);
// }
// user.greetingTwo = function (){
//     console.log(`Welcome`);
// }
// // function is executed as normal but the console log gives undefined
// console.log(user.greetingTwo());