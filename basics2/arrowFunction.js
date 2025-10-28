const user ={
    username : "ganesh",
    price: 599,
    WelcomeMassage:function(){
        console.log(`${this.username}, Welcome to websites`);
        // console.log(this);
        
    }
}

// user.WelcomeMassage();
// user.username ="yoge";
// user.WelcomeMassage();
// console.log(this);


// // function
// function frist(){
//     let username = "yoge";
//     console.log(this.username);
//     
// }
// frist()

// ================== Arrow Function  ==============

// let one = ()=>{
//     let username ="yoge";
//     console.log(this.username);
// }
// one()

// const twoNum =(num1, num2) =>{
//     return num1 + num2;
// }
// console.log(twoNum(5, 1));


// const twoNum =(num1, num2) =>  num1 + num2;
// console.log(twoNum(5, 4));

const twoNum =(num1, num2) =>  (num1 + num2);
console.log(twoNum(5, 3));