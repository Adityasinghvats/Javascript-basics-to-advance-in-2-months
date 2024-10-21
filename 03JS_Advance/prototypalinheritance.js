function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    console.log(`welcome to js ${this.name}`)
}

let aditya = new Person("Aditya");
aditya.greet();