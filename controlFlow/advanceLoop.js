// cosnt arr = ["java", "python", "java script", "html"];
// cosnt values = arr.forEach((item)=>{
//     console.log(item);
// })
// console.log(values);


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNum = myNum.filter((num) => num > 5)
console.log(newNum);
// const Num = myNum.filter((item) => {
//     return item > 8;
// })
// console.log(Num);

// same work useing for each loops

const num = [];
myNum.forEach((items) => {
    if (items > 4) {
        num.push(items);
    }
})
// console.log(num);

const books =[
    {
        titel:"Bhart ek Khoj",
        genre:"History",
        publish:1935,
        edition:2022
    },
       {
        titel:"Shaty ke shath mera priyog",
        genre:"History",
        publish:1946,
        edition:2024
    },
       {
        titel:"me nastik kiyo",
        genre:"Biography",
        publish:1985,
        edition:2018
    },
       {
        titel:"Gitanjli",
        genre:"poitery",
        publish:1900,
        edition:2023
    },
       {
        titel:"Gita",
        genre:"Spritual",
        publish:1855,
        edition:2012
    }
]

const mybk = books.filter((bk) => bk.genre === "History")
// console.log(mybk)
mybk.filter((bk)=> bk.publish >= 1930)
console.log(mybk)
