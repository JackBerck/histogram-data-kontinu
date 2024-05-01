import { getInputValue } from "./dataInput.js";

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

function dataSort() {
  return getInputValue().sort((a, b) => a - b);
}

function groupingData() {
  const data = dataSort();
  const classes = totalClass();
  const classWidth = classLength();
  const groupedData = [];

  for (let i = 0; i < classes; i++) {
    groupedData[i] = [];
  }

  let lowerLimit = Math.min(...data);
  let upperLimit = lowerLimit + classWidth;
  let classIndex = 0;

  data.forEach((value) => {
    if (value >= lowerLimit && value <= upperLimit) {
      groupedData[classIndex].push(value);
    } else {
      lowerLimit = upperLimit;
      upperLimit += classWidth;
      classIndex++;
      groupedData[classIndex].push(value);
    }
  });

  return groupedData;
}

export { groupingData, dataSort };
