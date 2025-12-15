const user = {
    name: "Anwishta",
    isLoggedIn: true,
    signedInCount: 4,
    getUsers: function(){
        console.log(this.name);      
    }
}

//console.log(user.getUsers());
//console.log(user.getUsers);
console.log(user.isLoggedIn);
console.log(user.name);
user.getUsers()


