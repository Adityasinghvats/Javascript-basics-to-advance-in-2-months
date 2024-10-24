// Javascript supports all oops but behind the scene it is all prototype based
// prototype -> extra functionality in any given data type or used defined data type
let computer = {
    cpu: 12,
};
let lenovo = {
    screen: "HD",
    __proto__: computer //access all properties of computer
};
let asus = {};

// console.log(`Computer`, lenovo.__proto__);

let genericCar = {tyres: 4};
let tesla = {
    driver: "AI",
}

Object.setPrototypeOf(tesla, genericCar);

// console.log(tesla.__proto__.tyres, tesla.driver)

console.log(Object.getPrototypeOf(tesla).tyres, tesla.driver); //newer method

const object1 = {};
object1.property1 = 42;
console.log(object1.hasOwnProperty('property1'));