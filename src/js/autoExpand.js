import { dataInput } from "./domElements.js";

function autosize() {
  let el = this;
  setTimeout(function () {
    el.style.cssText = "height:auto;";
    el.style.cssText = "height:" + el.scrollHeight + "px";
  }, 0);
}

export { autosize };
