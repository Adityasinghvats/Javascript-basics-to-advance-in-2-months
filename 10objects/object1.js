const number = {
    value : Math.PI,
};

const description = Object.getOwnPropertyDescriptor(number, 'value');

console.log(description.configurable);
console.log(description.value);
