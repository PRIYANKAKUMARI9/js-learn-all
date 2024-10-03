//function is a block of code it is design to perform a particular task.
//function is execute when it is called.

/*function sayMyName(){
    console.log("hello");
    
}
sayMyName();
sayMyName();


function printCounting(){
    for(i=1; i<=10; i++){
        console.log(i*2);
        
    }
}

printCounting()


function printAVG(num1,num2){
    let avg=(num1+num2)/2;
    console.log(avg);
}

printAVG(2,2)
printAVG(3,7)

*/


//"return" statement is used to specify the value that a function should output or "return" back to the caller.

function getSum(a,b,c){
    let sumall = a+b+c;
    return sumall;
}

let ans = getSum(2,3,4);
console.log(ans);


function getMyname(fn,ln){
    let fullname=fn+" "+ln;
    return fullname;// return ke bad hm kuchh bhi print krte hai wo cchale gi nhi
}

let getnameHere=getMyname("pri","sharma")
console.log("full name here :--",getnameHere);




function getMult(x,y){
   return x*y;
}

let ansMult=getMult(4,4)
console.log(ansMult);





function compare(m,n){
    let hello=m+n;
    return hello;

}

let ansHello=console.log(compare(6,7));
