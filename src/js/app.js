import { form, dataInput } from "./dom/domElements.js";
import { submitEvent } from "./validation/validateInput.js";
import { autosize } from "./interactivity/autoExpand.js";
import { createCookie } from "./input/cookie.js";

form.addEventListener("submit", submitEvent);

dataInput.addEventListener("keydown", autosize);

createCookie();
