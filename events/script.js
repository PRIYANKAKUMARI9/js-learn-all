//browser events are nothing but somthing occur in the browser
//events are diffrents type:- onclick,onsubmit,onfoucus,onscroll,etc

//show events :- monitorEvents(document);

function change(){
 let para=document.getElementById("para");
 para.textContent="good morning";
}

let para=document.getElementById("para");
para.addEventListener('click',change);

//para.removeEventListener('click",change); ew can remove event ie\f you want



function head(e){
   console.log(e);
    
    let h1=document.getElementById("heading");
    h1.textContent="This is Heading";
}

let h1=document.getElementById("heading");
h1.addEventListener("click",head);






//another anchor tag uses 

let a=document.getElementById("linkk");

a.addEventListener("click",function(e){
e.preventDefault();
a.textContent="ho gya click ji"
a.style.color="yellow"
})


//alert all uses
/*
let parasall=document.querySelectorAll("p");

function alertboxes(){
    alert("This is para ="+ event.target.textContent)
}

for(let i=0; i<parasall.length; i++){
    let para=parasall[i];
    para.addEventListener("click",alertboxes)
}
    */



function alertbox(event){
    alert("This boxes alert here :-" + event.target.textContent)
}
let chack=document.getElementById("wrapper");
chack.addEventListener("click",alertbox);
