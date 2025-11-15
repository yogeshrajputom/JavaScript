const promiseOne = new Promise(function(reslve, reject){
// Do asynk function
// DB calls, cryptography, network call
setTimeout(function(){
    console.log('Async task is complete');
    
}, 1000)
})

promiseOne.then(()=>{
    console.log('Promise consumed');
    
})