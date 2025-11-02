const myNum = [1, 2, 3];

// const myTotal = myNum.reduce(function(acc, currvalue){
//     console.log(`acc : ${acc} and currvalue ${currvalue}`);
//     
//     return acc + currvalue;
// }, 0);

const myTotal = myNum.reduce((acc, currvalue) => acc + currvalue, 0)
// console.log(myTotal);

const shoppingCard = [
    {
        itemsName: "java course",
        price:2500
    },
     {
        itemsName: "python course",
        price:500
    },
     {
        itemsName: "Data sinces course",
        price:5099
    },
     {
        itemsName: "DSA course",
        price:999
    },
]

const totalPrice =shoppingCard.reduce((acc, items)=> acc +items.price , 0)
console.log(totalPrice);
