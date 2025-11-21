const promiseOne = new Promise(function (resolve, reject) {
    // Do asynk function
    // DB calls, cryptography, network call
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log('Promise consumed');
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2 ");
        resolve()
    }, 2000)
}).then((value) => {
    console.log("Promise consumed 2");

})


const pormiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ userName: "Yoge", email: "yoge@gmail.com" })
    }, 2000)
})
pormiseThree.then((value) => {
    console.log(value);

})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ userName: "Rakesh", email: "yoge@gmail.454com" })
        } else {
            reject("ERROR: Somthing went worng")
        }
    }, 2000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.userName
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(()=>{
    console.log("The promises is either resolve and reject");
})


const promiseFive = new Promise((resolve, reject)=>{
      setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ userName: "JavaScript", password: "45421" })
        } else {
            reject("ERROR: JavaScript went worng")
        }
    }, 2000)
})

async function consumePromise(){
 try {
    const respons = await promiseFive
    console.log(respons);
 } catch (error) {
    console.log(error);
 }
}
consumePromise()


//async function getAllUser(){
//    //const respons = await fetch('https://jsonplaceholder.typicode.com/users')
//    //const data = await respons.json()
//    //console.log(data);
//    try {
//      const respons = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await respons.json()
//    console.log(data);   
//    } catch (error) {
//        console.log("E:", error)
//    }
//}
//getAllUser();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);  
})
.catch((error)=>{
    console.log(error);
    
})