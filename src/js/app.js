import { form, dataInput } from "./domElements.js";
import { submitEvent } from "./validateInput.js";
import { autosize } from "./autoExpand.js";

// Validate input user
form.addEventListener("submit", submitEvent);

// DOM Selection Graph Elements

// Submit Event
dataInput.addEventListener("keydown", autosize);
