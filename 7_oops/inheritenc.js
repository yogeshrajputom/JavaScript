class User{
    constructor(userName){
        this.userName=userName;
    }
    logMe(){
        console.log(`User Name is ${this.userName}`);
    }
}

class Teacher extends User {
    // constructor Override
    constructor(userName, email, password){
        super(userName)
        this.email =email;
        this.password= password;
    }
    addCours(){
        console.log(`New course added by ${this.userName}`);
    }
}

const mohan = new Teacher("Mohan","mohan@gmail.com","4784tsfS");
mohan.addCours()
mohan.logMe()

const suresh = new User("Suresh")
suresh.logMe()