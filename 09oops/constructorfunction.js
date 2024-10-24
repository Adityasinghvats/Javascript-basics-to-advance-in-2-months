// function is almost like a class
function Person(name, age){
    this.name = name;
    this.age = age;
    this.describe = function(){
        console.log(`${this.name} is of age ${this.age}`);
    }
};

const my = new Person("Aditya", 21);
my.describe();