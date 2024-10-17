const user = {
    name: "Aditya",
    greet(){
        console.log(`${this.name}`);
    },
};

// user.greet()

// Not calling the func but storing the reference in a variable , so it gives undefined
// as the context was not transfered
const newGreet = user.greet;
newGreet();

// bind call apply
// We need to bind an object
const bindGreet = user.greet.bind(user);
bindGreet();