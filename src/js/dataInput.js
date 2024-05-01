import { dataInput } from "./domElements.js";

function getInputValue() {
  const inputValue = dataInput.value.trim();
  const cleanedInput = inputValue.replace(/\n/g, " ");
  const dataChanged = cleanedInput.split(/\s+/);
  const numericArray = dataChanged.map(Number);
  return numericArray;
}

export { getInputValue };
