/*
The try statement allows you to define a block of code to be tested for errors while it is being executed.

The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

The JavaScript statements try and catch come in pairs:

try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
*/

try{
    console.log("hello");
    console.log("uses try");
}
catch(e){
console.log("catch error here");
console.log("excception");

}

//error handle here

try{
    console.log("second method");
    console.log(x);
    console.log("error tested here in try block");
}
catch(err){
    console.log("in this catch error here");
    console.log(err);
    console.log("after exception");
}



//tr