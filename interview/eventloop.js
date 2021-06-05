console.log("start");//Main task
setTimeout(()=>{
   console.log("setTimeout 1");// Task Queue
},0);

setTimeout(()=>{
    console.log("setTimeout 2");
},0);// queue

Promise.resolve().then(r =>console.log("Promise 1"))
.then(s =>console.log("Promise 2"));// MicroTask Queue


console.log("End");// Main Task

//priority-mainTask-microTask-taskQueue-Queue.