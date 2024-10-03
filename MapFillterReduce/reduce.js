//reduce() :- the reduce() method are reduce all array element into a  single value.
//In this two argument are pass accumulator and current element
/*
array.reduce(function_to_be_applied)


array.reduce(function (args) {
    // code;
}0)//means 0 index start reducing

*/

let arr=[10,2,4]
let printArr=arr.reduce((acc,cur)=>{
    return acc+cur;
},0)

console.log(printArr);





