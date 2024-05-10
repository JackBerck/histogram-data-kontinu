import { totalClass, classLength } from "../calculation/formula.js";
import { svg, xLine, yLine } from "../dom/domElements.js";
import { groupedData, barFrequency } from "../input/groupedValue.js";
import { getInputValue } from "../input/dataInput.js";

function barWidth() {
  const x1 = parseInt(yLine.getAttribute("x1"));
  const x2 = parseInt(yLine.getAttribute("x2"));

  const width = Math.abs(x2 - x1);
  const barWidth = width / (groupedData().length + 2);

  return barWidth;
}

function barHeight() {
  const y1 = parseInt(xLine.getAttribute("y1"));
  const y2 = parseInt(xLine.getAttribute("y2"));

  const height = Math.abs(y2 - y1);
  const maxLength = Math.max(...barFrequency());
  const barHeight = height / (maxLength + 1);

  return barHeight;
}

function createBar() {
  const bars = [];
  const barsContainer = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );
  barsContainer.classList.add("bar-container");

  let lowerLimit = Math.min(...getInputValue());
  let upperLimit = lowerLimit + classLength();

  groupedData().forEach((group, index) => {
    const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    bar.setAttribute("x", 130 + (barWidth() + barWidth() * index));
    bar.setAttribute("y", 370 - barHeight() * group.length);
    bar.setAttribute("width", barWidth());
    bar.setAttribute("height", barHeight() * group.length);
    bar.setAttribute("fill", "#9370db");
    bar.setAttribute("bar-frequency", group.length);
    bar.setAttribute("bar-range", `${lowerLimit} - ${upperLimit}`);
    lowerLimit = upperLimit;
    upperLimit += classLength();

    bars.push(bar);
  });

  bars.forEach((bar) => {
    barsContainer.appendChild(bar);
  });

  svg.appendChild(barsContainer);
}

function createAxesLabels() {
  const yLabels = document.createElementNS("http://www.w3.org/2000/svg", "g");
  yLabels.classList.add("labels", "y-labels");
  const yValues = [...barFrequency()];
  yValues.forEach((value) => {
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.textContent = `${value}`;
    text.setAttribute("x", 115);
    text.setAttribute("y", 370 - barHeight() * value);
    text.classList.add("label-title");
    yLabels.appendChild(text);

    const strokeLine = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    strokeLine.classList.add("stroke-line");
    strokeLine.setAttribute("x1", 130);
    strokeLine.setAttribute("x2", 705);
    strokeLine.setAttribute("y1", 370 - barHeight() * value);
    strokeLine.setAttribute("y2", 370 - barHeight() * value);
    yLabels.appendChild(strokeLine);
  });
  svg.appendChild(yLabels);

  const xLabels = document.createElementNS("http://www.w3.org/2000/svg", "g");
  xLabels.classList.add("labels", "x-labels");
  const xValues = [...createClassLabels()];
  xValues.forEach((value, index) => {
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.textContent = `${value}`;
    text.setAttribute("x", 120 + (barWidth() + index * barWidth()));
    text.setAttribute("y", 385);
    text.classList.add("label-title");
    xLabels.appendChild(text);
  });
  svg.appendChild(xLabels);
}

function createClassLabels() {
  const data = getInputValue();
  const totalClassLabels = totalClass();
  const classWidth = classLength();
  const classLabels = [];
  let lowerLimit = Math.min(...data);
  let upperLimit = lowerLimit + classWidth;

  for (let i = 0; i <= totalClassLabels; i++) {
    classLabels.push(lowerLimit);
    lowerLimit = upperLimit;
    upperLimit += classWidth;
  }

  return classLabels;
}

export { barWidth, barHeight, createBar, createAxesLabels };

// making bar, axeslabes, and stroke line to spoted the height of the bars - done i guess
