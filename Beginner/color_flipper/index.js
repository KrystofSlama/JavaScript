const colors = ["green", "red", "aqua", "blue", "gray", "purple", "pink", "snow", "cyan", "teal", "darkgreen", "darkred", "brown"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const backK = document.getElementsByClassName("backCol");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    //console.log(randomNumber);

    document.querySelector('.backCol').style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
