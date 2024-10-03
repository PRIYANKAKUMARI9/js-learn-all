// Filter() :- the filter() method are removes element that are not required and create a new array.
/*

syntax :- array.reduce(function_to_be_applied)


syntax:- array.reduce(function (args) {
    // code;
})

*/


let arr = [11,22,33,44,55];
let evenarr=arr.filter((ans)=>{
    return ans%2==0;
})
console.log("this is even number find with filter methods := ",evenarr);


////

let arr2=[3,23,,87,9,9,227];
let greternum=arr2.filter((num2)=>{
    if(num2>10){
        return true;
        
    }
})

console.log(greternum);


/// string print here on array

let str=[2,"hello","hii",null,8]
let printStr=str.filter((namee)=>{
    if(typeof(namee) === 'string'){
        return true;
    }

})

console.log(printStr);



