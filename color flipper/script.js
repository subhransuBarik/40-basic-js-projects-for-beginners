const button = document.getElementById("button");
const valueToPrint = document.querySelector(".hexValue");

const colorSet = ["D61355","16FF00","2F58CD"];

const simple = document.getElementById("simple");
const hex = document.getElementById("hex");
let simpleValue=true;
let hexValue=false;
function changeToSimple(){
    if(hexValue===true && simpleValue===false){
        simpleValue=true;
        hexValue=false;
        document.getElementById("simple").style.color="#bdcdd6";
        document.getElementById("hex").style.color="#191825";
    }
}
function changeToHex(){
    if(hexValue===false && simpleValue===true){
        simpleValue=false;
        hexValue=true;
        document.getElementById("hex").style.color="#bdcdd6";
        document.getElementById("simple").style.color="#191825";
    }
}
simple.addEventListener("click",changeToSimple);
hex.addEventListener("click",changeToHex);
function changeBgColor(){
    if(hexValue===true){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor="#" + randomColor;
        valueToPrint.innerText="#" + randomColor;
    }
    if(simpleValue===true){
        const randomColor = colorSet[Math.floor(Math.random()*3)]
        document.body.style.backgroundColor= "#" + colorSet[Math.floor(Math.random()*3)]
        valueToPrint.innerText="#" + randomColor;
    }
}

button.addEventListener("click",changeBgColor);