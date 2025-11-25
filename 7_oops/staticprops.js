class User {
    constructor(userName) {
        this.userName = userName;
    }

    logMe() {
        console.log(`UserName: ${this.userName}`);
    }

    static createID(){
        return "145"
    }
}

const ramesh = new User("Ramesh")

ramesh.logMe()
console.log(ramesh.createID());  // this is not eccess
