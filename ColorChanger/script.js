const buttons = document.querySelectorAll('.buttons');
const body = document.querySelector('body');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }   
        if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
    })
})