const display = document.getElementById("display");

function appendToDisplay(input) {
  if (display.value === "Error") {
    display.value = "";
  }
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
    if (display.value == "undefined") {
      display.value = "";
    }
  } catch (e) {
    display.value = display.value;
  }
}

function DeleteOne() {
  if (display.value === "Error") {
    display.value = "";
  } else {
    display.value = display.value.slice(0, -1);
  }
}
