let btn = document.querySelector("button");
btn.addEventListener("click", function() {

    let h3 = document.querySelector("h3");

    let getcolor = randomeColor();
    h3.innerText = getcolor;

    let div = document.querySelector(".box");
    div.style.backgroundColor=getcolor;
    btn.style.textColor=getcolor;
});

function randomeColor() {
let red = Math.floor(Math.random()* 255);
let green = Math.floor(Math.random()* 255);
let blue = Math.floor(Math.random()* 255);

let color = `rgb(${red} ${blue}, ${green})`
return color;
}