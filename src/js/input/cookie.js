import { form, dataInput } from "../dom/domElements.js";

function createCookie() {
  form.addEventListener("submit", function () {
    const userData = JSON.parse(sessionStorage.getItem("userData")) || {};
    const newData = dataInput.value;
    const key = newData.split(":")[0];
    userData[key] = newData;
    sessionStorage.setItem("userData", JSON.stringify(userData));
  });

  window.addEventListener("DOMContentLoaded", function () {
    const savedData = JSON.parse(sessionStorage.getItem("userData")) || {};
    const keys = Object.keys(savedData);
    keys.forEach((key) => {
      const option = document.createElement("option");
      option.value = savedData[key];
      dataInput.appendChild(option);
    });
  });
}

export { createCookie };
