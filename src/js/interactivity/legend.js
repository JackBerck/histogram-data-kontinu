function legendBox() {
  const bars = document.querySelectorAll(".bar-container rect");
  const infoBox = document.querySelector(".info-box");

  bars.forEach((bar) => {
    bar.addEventListener("mouseover", function (e) {
      const x = e.clientX + 10;
      const y = e.clientY + 10;
      const range = bar.getAttribute("bar-range");
      const frequency = bar.getAttribute("bar-frequency");
      infoBox.textContent = `Rentang Nilai: ${range}, Frekuensi: ${frequency}`;
      infoBox.style.left = `${x}px`;
      infoBox.style.top = `${y}px`;
      infoBox.style.display = "block";
      infoBox.style.opacity = 1;
    });
    bar.addEventListener("mouseout", function () {
      infoBox.style.opacity = 0;
      infoBox.style.display = "none";
    });
  });
}

export { legendBox };

// displaying an infographic of the frequency and range of each bar - done
