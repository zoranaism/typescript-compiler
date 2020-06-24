let number; // compiling as var in es5
number = 5;

const userName = "Zorana";

console.log(userName);

const button = document.querySelector("button")!;

button.addEventListener("click", () => {
  // let someName = "Zox";  unused parameter as noUsedLocals
  console.log("Clicked");
});

// a comment that will be removed when compiled

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  // return; requiered implicit return
}
