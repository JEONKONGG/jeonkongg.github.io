// Page 로드시
document.addEventListener("DOMContentLoaded", function () {
  fnSidebarActions();
});

// sidebar navigation active actions
function fnSidebarActions() {
  let current;
  let navSubArea;
  let navMain = document.getElementsByClassName("nav-main");

  // 1depth active 처리
  for (var i = 0; i < navMain.length; i++) {
    navMain[i].addEventListener("click", function () {
      current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      if (!this.classList.contains("active")) {
        this.className += " active";
        navSubArea = this.parentNode.children[1];

        if (navSubArea !== null && navSubArea !== undefined) {
          current = document.getElementsByClassName("show");
          if (current.length == 0) {
            navSubArea.className += " show";
          } else {
            current[0].className = current[0].className.replace(" show", "");
            navSubArea.className += " show";
          }
        } else {
          current = document.getElementsByClassName("show");
          if (current.length > 0) {
            current[0].className = current[0].className.replace(" show", "");
          }
        }
      }
    });
  }

  // 2depth active 처리
  document.querySelectorAll(".nav-sub").forEach((el) => {
    let current;
    el.addEventListener("click", function () {
      current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  });
}

/* typing animation */
// var typed = new Typed(".typing", {
//   strings: [
//     "",
//     "Web Designer",
//     "Web Developer",
//     "Graphic Designer",
//     "YouTuber",
//   ],
//   typeSpeed: 100,
//   BackSpeed: 60,
//   loop: true,
// });
