export {};

const add = document.getElementById("add") as HTMLElement;
const minus = document.getElementById("minus") as HTMLElement;
const number = document.querySelector("span") as HTMLElement;

let count = 0;

number.innerText = count.toString();

const updateText = () => {
  number.innerText = count.toString();
};

const handleAdd = () => {
  count++;
  updateText();
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
