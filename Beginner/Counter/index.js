let count = 0;
const num = document.querySelector("#num")
const btnIn = document.getElementById("btnIn");
const btnRe = document.getElementById("btnRe");
const btnDe = document.getElementById("btnDe");

btnIn.addEventListener("click", (e) => {
    count++;
    num.textContent = count;
})

btnDe.addEventListener("click", (e) => {
    count--;
    num.textContent = count;
})

btnRe.addEventListener("click", (e) => {
    count = 0;
    num.textContent = count;
})