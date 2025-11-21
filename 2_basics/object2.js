//singleton 
// const tinderUser = new Object();
// console.log(tinderUser);


// none singleton 
const tinderUser = {};
tinderUser.id = "124bv"
tinderUser.name = "MOhit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

let regularUser = {
    email: "wsome@gmail.com",
    fullName: {
        firstName: "Yog",
        lastName: "Raj"
    },
    address: "Pryagraj"
}

// console.log(regularUser.fullName.firstName);


let obj1 = { a: "4", b: "8" }
let obj2 = { c: "7", d: "9" }
let obj3 = { e: "2", f: "0" }

// const objThis = Object.assign({}, obj1, obj2, obj3);

const objThis = {...obj1,...obj2,...obj3};
// console.log(objThis);


const users = [
    {
        name:"yoge",
        id:"458gs",
        email: "yoge@gmail.com"
    },
       {
        name:"ge",
        id:"8gs",
        email: "ye@gmail.com"
    },
       {
        name:"ye",
        id:"45s",
        email: "ge@gmail.com"
    }
]

console.log(users[1].name)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));