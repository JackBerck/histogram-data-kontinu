import { dataInput } from "../dom/domElements.js";

function getInputValue() {
  const inputValue = dataInput.value.trim();
  const cleanedInput = inputValue.replace(/\n/g, " ");
  const dataChanged = cleanedInput.split(/\s+/);
  const numericArray = dataChanged.map(Number);
  const numericArraySorted = numericArray.sort((a, b) => a - b);
  return numericArraySorted;
}

export { getInputValue };
// get input value from textarea, cleaned that input using trim, seperate by space, fixing enter if it have too many value, change it to array with data type is number, and sort from smallest - done
