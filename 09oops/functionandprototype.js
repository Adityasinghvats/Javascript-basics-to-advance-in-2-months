function Animal(species){
    if(!new.target){
        throw new Error("Use new");
    }
    this.species = species;
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
}

const dog = new Animal("Dog");
console.log(dog.sound());

const cat = Animal("cat");

