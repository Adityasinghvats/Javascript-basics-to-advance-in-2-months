var c = 100;
if(true){
    let a = 20;
    const b = 30;
    var c = 40;
}

//  let a = 20;
//  const b = 30;
//  var c = 40;

//  When all varibles are outside scope of if they all give output -> Global scope variables

// when the varibales are inside the scope of if only var is accessible outside -> reason to not use var
// to avoid erros where same variable name can have 2 different values one in local scope(inside if)
//  and one in global (outside)

//  console.log(a);
//  console.log(b);
 console.log(c);