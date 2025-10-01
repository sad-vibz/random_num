const button = document.getElementById("button");
const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const min = 1;
const max = 9;


let a1, a2, a3;

button.onclick = function(){
    a1 = Math.floor(Math.random() * max) + min;
    a2 = Math.floor(Math.random() * max) + min;
    a3 = Math.floor(Math.random() * max) + min;

    ans1.textContent = a1;
    ans2.textContent = a2;
    ans3.textContent = a3;
}