const parent = document.querySelector("ul");
const button1 = document.querySelector("[value='Delete First Child']");
button1.addEventListener("click", () => {
    parent.removeChild(parent.firstChild);
});
const button2 = document.querySelector("[value='Delete Last Child']");
button2.addEventListener("click", () => {
    parent.removeChild(parent.lastChild);
});
const button3 = document.querySelector("[value='Delete Random Child']");
button3.addEventListener("click", () => {
    const children = parent.children;
    const randomIndex = Math.floor(Math.random() * children.length);
    parent.removeChild(children[randomIndex]);
});
const parent2 = document.querySelectorAll("ul")[1];
const button4 = document.querySelector("[value='exercice 4']");
button4.addEventListener("click", () => {
    const newLi = document.createElement("li");
    newLi.innerHTML = "New List Item";
    parent2.replaceChild(newLi, parent2.children[1]);
});
const input = document.querySelector("#replaceValue");
const button5 = document.querySelector("[value='exercice 5']");
button5.addEventListener("click", () => {
    const newLi = document.createElement("li");
    newLi.innerHTML = input.value;
    parent2.replaceChild(newLi, parent2.children[2]);
});
    