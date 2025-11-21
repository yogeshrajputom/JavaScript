let promises = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolve after 2 second");
        resolve(56)
    }, 2000)
})

promises.then((value) => {
    console.log(value);
    let promises2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Prominses 2")
        }, 2000)
    })
    return promises2;

}).then((value) => {
    console.log("We ar done");
    return 2;
}).then((vlaue)=>{
    console.log("we are pkka done");
    
})