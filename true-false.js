// falsy:
// ""
// undefined
// null
// NaN
// False
// Truthy:
// '0'
// ' '
// []


// const name = "" ;
let name = 12;
console.log(name);
if(name || name == 0){
console.log("True Condition");
}
else{
    console.log("False Condition");
}