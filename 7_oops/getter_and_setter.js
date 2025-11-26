class Customr {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password=value;
    }
}

const yoge = new Customr("yogesh@gmail.com", "457@rfsf")
console.log(yoge.password);
