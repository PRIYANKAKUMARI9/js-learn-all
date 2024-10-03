let obj={
    nam:"priyanka",
    age:22,
    year:2002
}

console.log(obj);

obj.color="green";
console.log(obj);




let all={
    model:"thar",
    color:"res",
    age:25
}

let print={...all}
console.log("print",print);

all.year="2027";
console.log(print);

console.log(all);


let add=Object.assign({},obj,all);
console.log(add);


//we use many object ,use with assing cloning

let arr=[1,"null",null,"hello"];
console.log(arr);

let arr2=[11,"green",5,"black"];
console.log(arr2);

let addArr=Object.assign({},arr,arr2)
console.log(addArr);





