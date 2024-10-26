const fs = require("node:fs");
const crypto = require("node:crypto");

const time = Date.now();

setTimeout(() => {
    console.log("Timeout1")
},0)


fs.readFile('file.txt','utf-8',()=>{
    console.log("File read")
    setTimeout(() => {
        console.log("Timeout2")
    },0)
    setImmediate(() => {
        console.log("immediate2");
    })
})

crypto.pbkdf2('password1','salt1',100000,1024,'sha512',()=>{
    console.log(`${Date.now() - time}`);
})
crypto.pbkdf2('password2','salt1',100000,1024,'sha512',()=>{
    console.log(`${Date.now() - time}`);
})
crypto.pbkdf2('password3','salt1',100000,1024,'sha512',()=>{
    console.log(`${Date.now() - time}`);
})
crypto.pbkdf2('password4','salt1',100000,1024,'sha512',()=>{
    console.log(`${Date.now() - time}`);
})
crypto.pbkdf2('password5','salt1',100000,1024,'sha512',()=>{
    console.log(`${Date.now() - time}`);
})

setImmediate(() => {
    console.log("immediate");
})

console.log("Top level code")