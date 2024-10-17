// Sometimes, you need all the promises to be fulfilled,
// but they don't depend on each other.

// The Promise.all() method is what you need here.
// It takes an array of promises and returns a single promise.

// Sometimes, you might need any one of a set of promises to
// be fulfilled, and don't care which one. In that case, you want Promise.any()

const options = {method: 'GET', headers: {accept: 'application/json'}};

const data1 = fetch(
    "https://api.freeapi.app/api/v1/public/randomusers",options);
const data2 = fetch( 
    "https://api.freeapi.app/api/v1/public/randomusers",options);
const data3 = fetch( 
    "https://api.freeapi.app/api/v1/public/randomusers",options);

Promise.all([data1, data2, data3])
.then((responses)=>{
    for(const response in responses){
        console.log(`${response}${response}`);
    }
})
.catch((err)=>{
    console.error(err);
})