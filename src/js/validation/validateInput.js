import { dataInput } from "../dom/domElements.js";
import { createBar, createAxesLabels } from "../visualization/chart.js";
import { resetBars, resetAxesLabels } from "../visualization/svgReset.js";
import { legendBox } from "../interactivity/legend.js";

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
    legendBox();
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
