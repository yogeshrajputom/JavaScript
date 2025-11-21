// For of loop

const arr =[1, 2, 3, 5, 8];
for (const num of arr){
   //  console.log(num);
    
}

const greetings = "Hello World";
for (const greet of greetings) {
    // console.log(greet);
    
}

// Mapps
const map = new Map();
map.set('IN', "india")
map.set('UK', "united kigdom")
map.set('FR', "france")

// console.log(map);

// use loop in map
for (const key of map) {
    // console.log(key);
    
}

for (const [key, value] of map) {
    // console.log(key, value);
    
}


// const myObj = {
//     game1:"mario",
//     game2:"pubg",
//     game3:"frifier",
//     game4:"spiderman"         
// }                                       // this code are not work
// for (const [key, value] of myObj) {
//     console.log(key, value);
//     
// }