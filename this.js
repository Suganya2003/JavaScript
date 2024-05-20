let b={
    name:"suganya",
    age: 17,
    tech:"java",
    
}
let b1={
    name:"Arun",
    age: 17,
    tech:"java",
    // creating anonomous function
    fun:function(){
      console.log(this.name);
    }
}
b1.fun();// this object belongs to the object which is called here.
