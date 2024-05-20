
let b={
    name:"suganya",
    age:17,

    compare:function(other){
        if(this.age>other.age)
        console.log(this)
        else
        console.log(other);
    }
}
let c={
    name:"arun",
    age:17,
}

b.compare(c);//to compare two objects using 1 object methods.