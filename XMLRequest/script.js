const body = document.querySelector('.container');

const xhr = new XMLHttpRequest();

const requestUrl = 'https://api.github.com/users/anwishtaghosh';

xhr.open('GET', requestUrl);

xhr.onreadystatechange =function() {
    console.log(xhr.readyState);
    //console.log(this.resonse)
    if(xhr.readyState === 4){
        const data = JSON.parse(this.response);
        const h1 = document.createElement('h1');
        h1.innerHTML = data.followers;
        //const img = document.createElement('img');
        body.appendChild(h1)
    }

}
xhr.send()