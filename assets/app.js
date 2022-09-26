const incBtn = document.getElementById("increase");
const decBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const counter = document.getElementById("counter");

incBtn.addEventListener('click',() => {
    counter.innerText++;
    if(counter.innerText>0){
        counter.style.color = "green";
    }
    if(counter.innerText==0){
        counter.style.color = "black";
    }
});

decBtn.addEventListener('click',() => {
    counter.innerText--;
    if(counter.innerText<0){
        counter.style.color = "red";
    }
    if(counter.innerText==0){
        counter.style.color = "black";
    }

});

resetBtn.addEventListener('click',() => {
    counter.innerText = "0";
    if(counter.innerText==0){
        counter.style.color = "black";
    }
})