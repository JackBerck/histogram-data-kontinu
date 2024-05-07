import { getInputValue } from "./dataInput.js";
import { totalClass, classLength } from "../calculation/formula.js";

function groupedData() {
  const data = getInputValue();
  const classes = totalClass();
  const classWidth = classLength();
  const groupedData = [];

  for (let i = 0; i < classes; i++) {
    groupedData.push([]);
  }

  let lowerLimit = Math.min(...data);
  let upperLimit = lowerLimit + classWidth;
  let classIndex = 0;

  data.forEach((value) => {
    while (value > upperLimit && classIndex < classes - 1) {
      lowerLimit = upperLimit;
      upperLimit += classWidth;
      classIndex++;
    }

    groupedData[classIndex].push(value);
  });

  return groupedData;
}

function barFrequency() {
  return groupedData().map((value) => {
    return value.length;
  });
}

export { groupedData, barFrequency };

// grouping by class width and calculating the frequency of each class - done
