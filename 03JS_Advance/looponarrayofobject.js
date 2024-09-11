const program = [
    {
        name:"Javascipt",
        file:"js"
    },
    {
        name:"Java",
        file:"java"
    },
    {
        name:"Kotlin",
        file:"kt"
    }
]

program.forEach( (value) =>{
    console.log(`${value.name} uses file name ${value.file}`);
        
} )