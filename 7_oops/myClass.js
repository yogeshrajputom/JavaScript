//ES 6

// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword() {
//         return `${this.password}41fs#$`
//     }
//     changUserName() {
//         return `${this.username.toUpperCase()}`
//     }
// }
// 
// const pass = new User("Ganesh", "ganesh@gmail.com", "457#RD");
// console.log(pass.encryptPassword());
// console.log(pass.changUserName());


// behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword= function(){
    return `${this.password}14jgn#$%@`
}
User.prototype.changUserName=function(){
    return`${this.username.toUpperCase()}`
}

const ram = new User("Ram", "ram@gmail.com", "RaM90");
console.log(ram.encryptPassword());
console.log(ram.changUserName());

