document.addEventListener("DOMContentLoaded", function () {
  // include footer
  fetch("footer.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector("footer").innerHTML = data;
    });
});
