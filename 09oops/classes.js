let car = {
    brand: "Toyota",
    model: "2020",
    start: function(){
        return `Car started`;
    }
};
// console.log(car.start());

// Prototypal chain
Array.prototype.call = function (){
    return `Calling you ${this}`
}
const arr = [1,2,3];
// console.log(arr.call());

// Classes are prototype under thw hood
class Vehicle{
    constructor(name, year){//constructor is a method in js
        this.name = name;
        this.year = year;
    }
    start(){
        return `${this.name} was build in ${this.year}`;
    }
}

class Car extends Vehicle{
    drive(){
        return `${this.year}`;
    }
}

let car1 = new Car("Safari", 2012);
console.log(car1.start());
console.log(car1.drive());