const names = ["Aditya","Abhinav","Aditi"];

// Giving a callback function to foreach
names.forEach( function (index){
    // console.log(index);
} )

// Using arrow function
names.forEach( (val)=>{
    // console.log(val);
    
} )


// For each gives vlaue,indx and entire array as well
names.forEach( (value,index,arr)=>{
    console.log(value,index,arr);
    
} )