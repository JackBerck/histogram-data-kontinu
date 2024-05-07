function autosize() {
  let el = this;
  setTimeout(function () {
    el.style.cssText = "height:auto;";
    el.style.cssText = "height:" + el.scrollHeight + "px";
  }, 0);
}

export { autosize };
// the size changes automatically according to the input amount - done
