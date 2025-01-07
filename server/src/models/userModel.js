class User{
    constructor(email, password, userType){
        (this.email = email),
        (this.password = password),
        (this.userType = userType)
    };
}

module.exports = User;