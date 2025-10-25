//singleton

// object literals

const mysml = Symbol("key1");

let info = {
    name : "yogesh",
    "fullName": "Yogesh Kumar",
    [mysml]: "myKey1",
    age:25,
    address:"Mankai",
    email:"yogeh@gamil.com",
    isLoggedIn :false,
    lastLoggedIn: ["monday", "Sundey", "suterday"]
}

// console.log(info.age);
// console.log(info["age"]);
// console.log(info.fullName)    // this is not give me any output
console.log(info["fullName"]);
// console.log(info.mysml);
// console.log(typeof info.mysml);     // Sting but i want Symbole type of data

console.log(info[mysml])