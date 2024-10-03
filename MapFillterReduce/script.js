//Map():-map()method transforms every element in an array and creates a new array.
/*

//array.map(pass function inside)


array.map(function (args) {
    // code;
})
*/

let arr=[2,3,4,5];

let sum =arr.map((element)=>{
    return element*element;
})

console.log(sum);

//////////////////


let arr2=[2,5,9];
let sum2=arr2.map(function(add){
    return add*2
})

console.log(sum2);
console.log(typeof(sum2));


////////////


let num=[10,20,30,40]
num.map((adding,index)=>{
    console.log(index,adding+1);
   
    
    
})
