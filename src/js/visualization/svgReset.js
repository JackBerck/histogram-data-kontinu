function resetBars() {
  const barContainer = document.querySelector(".bar-container");

  barContainer.remove();
}

function resetAxesLabels() {
  const labels = document.querySelectorAll(".labels");

  labels.forEach((element) => element.remove());
}

export { resetBars, resetAxesLabels };

// just to reset the bars when users inputed and submited more than one - done
