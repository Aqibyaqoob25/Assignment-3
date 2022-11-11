let Calculatorscreen = document.querySelector("#screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
    item.addEventListener("click", (e)=> {
    buttonText = e.target.innerText;
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      Calculatorscreen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      Calculatorscreen.value = screenValue;
    }else if (buttonText == "console log") {
      screenValue +=buttonText;
      Calculatorscreen.value = screenValue;
    } 
     else if (buttonText == "=") {
      Calculatorscreen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      Calculatorscreen.value = screenValue;
    }
  });
}

