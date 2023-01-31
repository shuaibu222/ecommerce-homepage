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

// Image Slide Code

if (window.matchMedia("(min-width: 47em)").matches) {
  // Image Slide DOM

  const bigImage = document.querySelectorAll(".b-image");
  const tabsSection = document.querySelector(".max-width-2");
  const tabs = document.querySelectorAll(".tabs");

  tabsSection.addEventListener("click", function (slider) {
    const sliderId = slider.target.dataset.id;

    if (sliderId) {
      tabs.forEach(function (t) {
        t.classList.remove("active-bg");
      });

      slider.target.classList.add("active-bg");

      bigImage.forEach(function (b) {
        b.classList.remove("active");
        b.classList.add("none");
      });

      const big = document.getElementById(sliderId);
      big.classList.add("active");
      big.classList.remove("none");
    }
  });
} else {
  // Mobile slider

  const bigImage = document.querySelectorAll(".b-image");
  let slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs((slideIndex += n));
  }

  function showDivs(n) {
    let i;

    if (n > bigImage.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = bigImage.length;
    }
    for (i = 0; i < bigImage.length; i++) {
      bigImage[i].style.display = "none";
    }
    bigImage[slideIndex - 1].style.display = "block";
  }
}
