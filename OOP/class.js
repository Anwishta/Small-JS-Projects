// class User{
//     constructor(username, password){
//         this.username = username;
//         this.password = password;
//     }

//     encryptedPassword(){
//         return `${this.password}abc`
//     }

//     logMe(){
//         console.log(this.username); //anwis
        
//     }
// }
// class Teacher extends User{
//     constructor(username, email, password){
//         super(username, password);
//         this.email = email;
//     }

//     createCourse(){
//         return `this course is created by ${this.username}`;
//     }
// }

// const anwis = new Teacher("anwis", "anwis@gmail.com", 123)

// console.log(anwis.createCourse()) //this course is created by anwis
// console.log(anwis.encryptedPassword()); //123abc
// console.log(anwis.logMe()); //undefined -> cause console.log of console.log is undefined 


function User(username, password){
    this.username = username;
    this.password = password;
}

User.prototype.encryptedPassword = function(){
    return `${this.password}`
}

User.prototype.logMe = function(){
    return `${this.username}`
}

const code = new User("code", "code@gmail.com")

console.log(code.encryptedPassword());
console.log(code.logMe());

