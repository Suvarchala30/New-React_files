//closures
function fun1(){
    let x=10;
    return function fun2(){
        return x;
    }
}
console.log("Closures output ",fun1()())

let obj = {
    id:1,
    name:"suvarchala",
    city:"Hyderabad"
}
//bind
function bind1(state){
    console.log(this.id +" "+ this.name+" "+state)
}
let bindMethod = bind1.bind(obj,"Andhra")

bindMethod()
//call - takes arguments normally
function call1(state){
    console.log(this.id + " is " + this.name + " " + this.city + " " + state)
}

call1.call(obj,"Telangana")

//apply - only takes arguments in array format
function apply1(state,country,zip,phone,marks1,marks2){
    console.log(this.name + " is from " + this.city + " from state " + state + " " +country+" "+zip +" "+phone+" "+marks1+" "+marks2)
}
apply1.apply(obj,["Telangana","India","501510","8916785431","98","87"])


console.log(1<2<3)
console.log(3>2>1)
console.log(0.1+0.2 === 0.3)