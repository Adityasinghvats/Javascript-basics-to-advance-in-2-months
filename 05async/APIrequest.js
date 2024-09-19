fetch('https://www.google.com',{
    method:'POST',
    body:JSON.stringify({name:"Aditya"}),
})
.then(() => {})
.catch(() =>{})
.finally(() => {})
// fetch promise rejects only when network errors occure , it
// doesnot work for http header errors
// fetch has a special task queue , which make it execute before
// any other code in task queue and added to call stack above all