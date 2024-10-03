/*
A JavaScript Promise object can be:

Pending
Fulfilled
Rejected
The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.


***********syntax here********************

let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { // code if successful },
  function(error) { //code if some error  }
);







if promise fullfild in futur than uses then() method ,,,if promise rejected than uses catch() method
*/


let pro=new Promise((resolve,reject)=>{
  console.log("hello");
  resolve(788);
  
})


//reject uses

let err=new Promise((resolve,reject)=>{
  console.log("rejected usese here print in console");
  reject(new Error("error printed"));
})








// timer function uses here

function hello(){
  console.log("hiii hiii");
  
}

setTimeout(hello,7000)


//another uses

setTimeout(function printed(){
  console.log("hello priyanka");
  
},9000);




//then ar catch print here


let printall=new Promise((resolve,reject)=>{
     let sucsess=true;
     if(sucsess){
      resolve("resolve success here");
     }
     else{
       reject("reject here")
     }
})

printall.then((message)=>{
  console.log("success here"+message);
  
}).catch((error)=>{
  console.log("error printed here"+error);
  
})