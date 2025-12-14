const box = document.querySelector("#images");

box.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG"){
        let node = e.target.parentNode;
        node.remove();
    }
    console.log(e.target.tagName);
    
}, false);


console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

console.log(3);
