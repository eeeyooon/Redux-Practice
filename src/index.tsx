import { legacy_createStore as createStore } from "redux";
export {};

const add = document.getElementById("add") as HTMLElement;
const minus = document.getElementById("minus") as HTMLElement;
const number = document.querySelector("span") as HTMLElement;

const countModifier = (count: number = 0) => {
  return count;
};
const countStore = createStore(countModifier);

console.log(countStore.getState());
