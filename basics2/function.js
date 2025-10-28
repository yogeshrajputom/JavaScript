// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

// let saveValues = addTwoNumber(5 , 2);
// console.log(saveValues);

function addTwo(num1, num2){
    let result= num1 +num2;
    return result;
}

let save = addTwo(5, 7);
//console.log(save);


// Ecommerce me card ke price ko add karna by function

function calculateCardPrice(...num){
    return num;
}

//console.log(calculateCardPrice(42, 52, 46));

// Object handling by Function

const user ={
    username:"Yoge",
    price:599,
    email:"yoge@gmail.com"
}

function handelObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price of ${anyObject.price} or user email is ${anyObject.email}`);
    
}

// handelObject(user);
/*handelObject({
    username:"Kumar",
    price:599,
    email:"kumar@gamil.com"
}) */

// Array value print by function

let newArray =[400, 502, 6.202, 145];
function handelArray(getArray){
    return getArray[2];
}

console.log(handelArray(newArray))