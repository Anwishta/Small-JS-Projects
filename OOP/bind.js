const user = {
    username: "anwis",
    gmail: "anwis@gmail.com",
    isLoggedIn: true
}

const description = Object.getOwnPropertyDescriptor(user, "username");
console.log(description);

Object.defineProperty(user, "username", {
    writable: false,
    enumerable: false
})

for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
    
}