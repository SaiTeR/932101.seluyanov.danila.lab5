const mainBlock = document.getElementById("main")


const firstButton = document.getElementById("button1")
const info1 = document.getElementById("inf1")

firstButton.addEventListener("click", () => {
    event.preventDefault();

    mainBlock.style.opacity = 0.5;
    info1.style.display = "flex";
})
info1.addEventListener("click" , () => {
    mainBlock.style.opacity = 1;
    info1.style.display = "none";
})


const secondButton = document.getElementById("button2")
const info2 = document.getElementById("inf2")

secondButton.addEventListener("click", () => {
    event.preventDefault();

    mainBlock.style.opacity = 0.5;
    info2.style.display = "flex";
})
info2.addEventListener("click" , () => {
    mainBlock.style.opacity = 1;
    info2.style.display = "none";
})


const thirdButton = document.getElementById("button3")
const info3 = document.getElementById("inf3")

thirdButton.addEventListener("click", () => {
    event.preventDefault();

    mainBlock.style.opacity = 0.5;
    info3.style.display = "flex";
})

info3.addEventListener("click" , () => {
    mainBlock.style.opacity = 1;
    info3.style.display = "none";
})



