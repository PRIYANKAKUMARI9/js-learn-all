 //asyncronus function :- async is used when promise handle
 //async hamesha promise return krta hai

async function hello(){
    setTimeout(function(){
        console.log("priyanka");
        
    },2000)
}

hello()




//json :--  get api uses

async function gett(){
    let uses= await fetch('https://jsonplaceholder.typicode.com/comments');
    let data=await uses.json();
    console.log(data);
    
}

gett()