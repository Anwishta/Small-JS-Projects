fetch('https://api.github.com/users/anwishtaghosh', {
    method: "GET"
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error)
)

const url = 'https://api.github.com/users/anwishtaghosh'   
const users = async () => {
    try {
        const rawData = await fetch(url);
        const jsonData = await rawData.json();
        console.log(jsonData);
        
    } catch (error) {
        console.log(error);
        
    }

}

users()

new Promise((resolve, reject) => {
    fetch('https://api.github.com/users/anwishtaghosh')
    .then(response => {
        if (!response.ok) {
            reject("Error!!!!!!!")
        }
        return response.json();
    })
}).then(data => console.log(data))
.catch(err => console.log(err))