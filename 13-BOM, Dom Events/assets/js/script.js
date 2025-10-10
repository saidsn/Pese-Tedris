let inputOne = document.querySelector(".input_one");
let inputTwo = document.querySelector(".input_two");

let plusBtn = document.querySelector(".plus_btn");
let minusBtn = document.querySelector(".minus_btn");
let multBtn = document.querySelector(".mult_btn");
let divBtn = document.querySelector(".div_btn");

let result = document.querySelector(".result");



let checkInputValue = () => {
  if (inputOne.value == "" || inputTwo.value == "") {
    alert("Please enter number");
    return;
  }
};

let emptyInputValue = () => {
  inputOne.value = "";
  inputTwo.value = "";
};




function Sum() {
  checkInputValue();
  result.textContent = Number(inputOne.value) + Number(inputTwo.value);
  emptyInputValue();
}
plusBtn.addEventListener("click", Sum);



function Sub() {
  checkInputValue();
  result.textContent = Number(inputOne.value) - Number(inputTwo.value);
  emptyInputValue();
}
minusBtn.addEventListener("click", Sub);
