//class is a blueprint  for creating objects.

class carname {
    //properties
    name = "priyanka";
    age=22;
    vill="pandit pur";

    //behaviour  //functuin write down

    woking(){
        console.log("priyanka");  
    }
    running(){
        console.log("i am running");
        
    }

}

let obj=new carname();
console.log(obj.age);
obj.running()

