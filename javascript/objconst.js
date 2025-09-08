function Student(name,Id,address){
    this.name=name
    this.Id=Id
    this.address=address
    this.display=function(){
        console.log("name: "+this.name+"   id: "+this.Id+"  address: "+this.address)
    }
}

var std1=new Student("athul",155,"yoyo_yoyo")
var std2=new Student("jaanu",225,"heheh_heheh")
console.log(std1)
console.log(std2)
console.log(std1.name)
std2.display()

//date object
var d=new Date("25 july 2024")
console.log(d.getDate())
console.log(d.getFullYear())
console.log(d.getTime())
console.log(d.getDay())