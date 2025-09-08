const arr=["apple","orange","grape"]
arr.push(1)
arr.push('strawberry')
console.log(arr)

function sum1(a1,a2){
    console.log(a1+a2)
}
sum1(25+20)

class Sample {
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }

    display() {
        console.log("hello friends " + (this.num1 + this.num2))
    }
}

var obj = new Sample(40, 40)
var obj2 = new Sample(50, 50)
console.log(obj.num1)
obj.display()
obj2.display()