class Home{
    #price = 0;//private field
    deposit(amount){
        this.#price += amount;
        return this.#price;
    }
    call(){//abstraction
        // db call
        // network call
    }
    // static can be called by class itself only
    static height(height){
        return this.height;
    }
    // getter setter mwthod name should be same as that of the provate property
}

console.log(Home.height(10));