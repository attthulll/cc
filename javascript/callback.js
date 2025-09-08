//synchroous

function task(milliSecondTime){
    dt=new Date()
    while((new Date-dt)<= milliSecondTime){}
}
console.log('task1 started')
task(3000)
console.log('task1 ended')

console.log('task2 started')
task(4000)
console.log('task2 ended')

console.log('task3 started')
task(3000)
console.log('task3 ended')

// asynchronous
function taskEnd(){
    console.log('task ended')
}
console.log('task1 started')
setTimeout(taskEnd,5000)

console.log('task2 started')
setTimeout(taskEnd,2000)

console.log('task3 started')
setTimeout(taskEnd,3000)