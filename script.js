// Sidebar DOM

const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger-icon");
const sidebar = document.querySelector(".sidenav");
const closeSidebar = document.querySelector("#closeSidebar");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", function () {
  sidebar.style.width = "270px";
  body.style.overflow = "hidden";
  overlay.classList.add("fade-in");
  overlay.classList.remove("fade-out");
});

closeSidebar.addEventListener("click", function () {
  sidebar.style.width = "0px";
  body.style.overflow = "visible";
  overlay.classList.remove("fade-in");
  overlay.classList.add("fade-out");
});

// Image Slide DOM

const bigImage = document.querySelectorAll(".b-image");
const tabsSection = document.querySelector(".max-width-2");
const tabsParent = document.querySelectorAll(".tabs-parent");
console.log(tabsParent);
// const tabs = document.querySelectorAll(".tabs");

tabsSection.addEventListener("click", function (slider) {
  const sliderId = slider.target.dataset.id;
  console.log(sliderId);

  if (sliderId) {
    tabsParent.forEach(function (t) {
      t.classList.remove("active-bg");
    });

    slider.target.classList.add("active-bg");
  }
});
