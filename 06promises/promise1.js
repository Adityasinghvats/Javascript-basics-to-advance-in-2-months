// 1
// const promiseOne = new Promise(function(resolve,reject){
//     // async code here
//     // db call, network call, cryptography
//     setTimeout(function(){
//         console.log("async task done");
//         resolve()
//     },2000)
// });

// promiseOne.then(function(){
//     console.log("Resolved");
    
// })

// resolve executes the then functionality, it can even take custom parameters to pass on
// to .then to execute

// 2
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task2 done");
//         resolve()
//     },2000)
// }).then(function(){
//     console.log("Resolved");
// })

// 3
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Aditya", email:"example.com"})
//     },2000)
// }).then(function(user){
//     console.log(user);
// })

// 4
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         // error = true or false
//         if(!error){
//             resolve({username:"Aditya", email:"example.com"})
//         }else{
//             reject("Error: Something went wrong")
//         }
//     },2000)
// })
// .then(function(user){
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Promise was executed or rejected")
// })

// 5
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        // error = true or false
        if(!error){
            resolve({username:"Aditya", email:"example.com"})
        }else{
            reject("Error: Something went wrong")
        }
    },2000)
})

// async - await cannot handle error gracefully
async function promiseFiveResponse(params) {
    try{
        const res = await promiseFive
        console.log(res)
    }
    catch(error){
        console.log(error);
    }
}
promiseFiveResponse()