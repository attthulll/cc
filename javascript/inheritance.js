class Sample{
    sampleHello(){
        console.log("say hello")
    }
}

class Hello extends Sample{
    constructor(num1,num2){
        super()
        this.num1=num1
        this.num2=num2
    }
    hai(){
        console.log("hi friends"+(this.num1+this.num2))
    }
}
var obj=new Hello(50,50)
obj.hai()
obj.sampleHello()

function addition(a,b){
    return(a+b)
}
console.log(addition(25,30))
let add1=(a,b) =>console.log(a+b)
x=50
y=20
add1(x,y)
add1(50,20)

let display=()=>console.log("hello world")
display()

