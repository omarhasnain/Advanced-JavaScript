// const numbers =[2,4,5,6,7,8];
// const output=[];
// for(let i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
// output.push(result);
// }

// function square(element){
//     return element*element;
// }

// const sqaure = element => element*element;
// const square = x => x*x;
// const result= numbers.map(x => x*x);

// console.log(result);

const numbers = [1,2,3,4,5,6,7,8];

const bigger = numbers.filter(x => x<3);
const isThere = numbers.find(x => x > 2);
console.log(isThere);


const square = numbers.map(x => x*x);

console.log(square);