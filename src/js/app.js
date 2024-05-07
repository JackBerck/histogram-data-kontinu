import { form, dataInput } from "./dom/domElements.js";
import { submitEvent } from "./validation/validateInput.js";
import { autosize } from "./interactivity/autoExpand.js";

// Validate input user
form.addEventListener("submit", submitEvent);

// DOM Selection Graph Elements

// Autosize Textarea
dataInput.addEventListener("keydown", autosize);
