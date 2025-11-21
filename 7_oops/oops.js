// object literal

const obj = {
    username: "yoge",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        //console.log("Got user details from database");
        //console.log(`username : ${this.username}`)
        //console.log(this)
    }
}

//console.log(obj.username);
//console.log(obj.getUserDetails());
//console.log(this);

function users(usernaem, loginCount, isLoggedIn) {
    this.usernaem = usernaem
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    //return this
}
const userOne = new users("ganesh", 12, true)
const userTwo = new users("Mohan", 11, false)
console.log(userOne);
console.log(userTwo);

