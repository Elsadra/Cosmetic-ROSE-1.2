$(document).ready(function () {
  let hamburger_btn = $(".hamburger");
  let sub_menu = $(".sub-menu");
  let ul_sub_menu = $(".ul-sub-menu");
  let slider = $(".slider");

  var isOpen = false;
  hamburger_btn.click(function () {
    if (!isOpen) {
      isOpen = true;
      sub_menu.css({
        position: "fixed",
        right: "0%",
        transition: ".7s",
      });
      slider.css({
        position: "fixed",
        right: "70%",
        transition: ".8s",
      });
      setTimeout(function () {
        ul_sub_menu.css({
        margin: "2rem 2rem 0 0",
        transition: ".8s",
        opacity: "1"
        });
      }, 200);
    } else {
      isOpen = false;
      sub_menu.css({
        position: "fixed",
        right: "-70%",
        transition: ".7s",
      });
      slider.css({
        position: "fixed",
        right: "-30%",
        transition: ".8s",
      });
      setTimeout(function () {
        ul_sub_menu.css({
        margin: "2rem 35rem 0 0",
        transition: ".8s",
        opacity: "0"
        });
      }, 200);
    }
  });
});

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});
