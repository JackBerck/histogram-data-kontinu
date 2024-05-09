import { dataInput } from "../dom/domElements.js";
import { classLength, range } from "../calculation/formula.js";
import {
  createBar,
  createAxesLabels,
  barHeight,
} from "../visualization/chart.js";
import { getInputValue } from "../input/dataInput.js";
import { groupedData, barFrequency } from "../input/groupedValue.js";
import { resetBars, resetAxesLabels } from "../visualization/svgReset.js";

function validateInput(dataValue) {
  const isValid = /^\d+(\s+\d+)*$/.test(dataValue);

  if (document.querySelector(".bar-container")) {
    resetBars();
    resetAxesLabels();
  }
  if (isValid) {
    console.log("Input valid: ", dataValue);
    createBar();
    createAxesLabels();
    console.log(groupedData());
    console.log(classLength());
    console.log(range());
    console.log(barFrequency());
    console.log(barHeight());
    console.log(getInputValue());
  } else {
    alert("Input harus berupa angka dan dipisahkan dengan spasi.");
  }
}

function submitEvent(event) {
  event.preventDefault();
  const inputValue = dataInput.value.trim();

  validateInput(inputValue);
}

export { submitEvent };

// input validation that input must be number and seperate by space - done
