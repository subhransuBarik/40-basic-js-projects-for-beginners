const value = document.querySelector(".value");
const dec = document.querySelector(".dec");
const inc = document.querySelector(".inc");
const res = document.querySelector(".res");
let val=0;
function decreseValue(){
    val=val-1;
    value.innerText=val;
    if(val<0){
        value.style.color="red";
    }else if(val===0){
        value.style.color="white";
    }else{
        value.style.color="green";
    }
}
function increseValue(){
    val=val+1;
    value.innerText=val;
    if(val<0){
        value.style.color="red";
    }else if(val===0){
        value.style.color="white";
    }else{
        value.style.color="green";
    }
}
function resetValue(){
    val=0;
    value.innerText=val;
    value.style.color="white";
    
}
dec.addEventListener("click",decreseValue);
inc.addEventListener("click",increseValue);
res.addEventListener("click",resetValue);
