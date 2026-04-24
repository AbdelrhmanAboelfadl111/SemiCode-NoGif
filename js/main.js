document.querySelector("#loaderImg").addEventListener("onerror", function () {
  this.style.display = "none";
  this.parentElement.querySelector(".sc-logo-fallback").style.display = "flex";
});
