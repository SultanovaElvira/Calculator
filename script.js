// let button = document.querySelector("button");- только на один элемент работает
let number1 = "";
let number2 = "";
let buttons = document.querySelectorAll("button");
let operator = "";
let equal = document.getElementsByClassName(".equal-sign");
let clear = document.querySelector(".all-clear ");
let field = document.querySelector(".calculator-screen");
let result = false;
let operators = document.querySelectorAll(".operator");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    func1(button);
  });
});

function func1(button) {
  if (button.classList.contains("operator")) {
    //+,-,*,/
    result = false;

    //checking that operator will not write twise (чтоб оператор не прописывался дважды)

    if (number2 != "") {
      //Calculating result

      switch (operator) {
        case "+":
          field.value = Number(number1) + Number(number2);
          break;
        case "-":
          field.value = Number(number1) - Number(number2);
          break;
        case "*":
          field.value = Number(number1) * Number(number2);
          break;
        case "/":
          field.value = Number(number1) / Number(number2);
      }

      /* OR
      if (operator == "+") {
        field.value = Number(number1) + Number(number2);
      }
      else if (operator == "-") {
        field.value = Number(number1) - Number(number2);
      }
      else if (operator == "*") {
        field.value = Number(number1) * Number(number2);
      }
      else {
        field.value = Number(number1) * Number(number2);
      }
*/

      result = true;

      number1 = field.value;
      number2 = "";
    } 
    else if (operator != "") {
      
      field.value= number1;
    }

    operator = button.value;
    // console.log(number1 + " " + operator + " " + number2);
  } else {
    //0-9,AC, .
    if (result) {
      field.value = "";
      number1 = "";
      number2 = "";
      operator = "";
    }
    //  or can be this:
    // if (operator == "="){
    // result =true
    // }

    if (operator == "") {
      number1 = number1 + button.value;
    } else {
      number2 = number2 + button.value;
    }
  }

  if (button.value != "=") {
    field.value = field.value + button.value;
  }
}

clear.onclick = function () {
  field.value = "";
  number1 = "";
  number2 = "";
  operator = "";
  console.log(field.value);
};

// for (const oneOperator of operators) {
//   oneOperator.click = function() {
//     if
//   }

// }
