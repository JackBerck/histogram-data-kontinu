import { dataInput } from "./domElements.js";
import { getInputValue } from "./dataInput.js";
import { groupingData } from "./calc.js";

function validateInput(dataValue) {
  const isValid = /^\d+(\s+\d+)*$/.test(dataValue);

  if (isValid) {
    console.log("Input valid: ", dataValue);
  } else {
    alert("Input harus berupa angka dan dipisahkan dengan spasi.");
  }
}

function submitEvent(event) {
  event.preventDefault();
  const inputValue = dataInput.value.trim();

  console.log(groupingData());
  validateInput(inputValue);
}

export { submitEvent };
