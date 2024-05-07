import { getInputValue } from "../input/dataInput.js";

function totalClass() {
  return Math.floor(1 + 3.3 * Math.log10(getInputValue().length));
}

function range() {
  const min = Math.min(...getInputValue());
  const max = Math.max(...getInputValue());
  return max - min;
}

function classLength() {
  return Math.floor(range() / totalClass());
}

export { totalClass, range, classLength };

// formula from continuous data with equal class width to display an histogram - done
