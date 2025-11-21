// Primtive values are store in stacks
let myYoutube = "TFX";
let anotherName = myYoutube;

anotherName = "TVF";
console.log(myYoutube);
console.log(anotherName);

// non Primtive values are store in Heap
let userOne = {
    name: "yoge",
    email: "yogesh@gamil.com",
    pass: 4542
}

let userTwo = userOne;

userTwo.email = "yoge12@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

