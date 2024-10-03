//object is a key value pair,it is non-primitive(referance datatype hai)

/*let obj={
    nameMay:"pri",
    age:22,
    greet:function(){
        console.log("this is my name");
        
    }
}

console.log(obj);
obj.greet();
console.log(typeof(obj));


*/
// array store multiple values in single variable
//array is collection of items


let arr=[1,2,3,"hello","name",false]
console.log(arr[3]);
console.log(typeof(arr));


let brr = new Array(7,"hjh",8.9)
brr.push("priyanka");//add name
brr.pop()//remove name
brr.push(30);
brr.push(40);
brr.push(70);
brr.push(300);

brr.shift();//remove left side
brr.unshift("mumuy");//add left side

console.log(brr.slice(4,6));//slice means given new element
console.log(brr.slice(2,6));



console.log(brr);









