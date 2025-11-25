const descriptor=Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);


const User={
    name:"Ramu",
    colleg:"RP inter collage",
    fees:"51000",
    isAttend: true,
}

console.log(Object.getOwnPropertyDescriptor(User, "name"));
Object.defineProperty(User, "fees", {
    writable:false,
})

console.log(Object.getOwnPropertyDescriptor(User, "fees"))