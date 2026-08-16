'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// project lightbox variables
const projectLightbox = document.querySelector("[data-project-lightbox]");
const projectLightboxImg = document.querySelector("[data-project-lightbox-img]");
const projectLightboxCaption = document.querySelector("[data-project-lightbox-caption]");
const projectLightboxClose = document.querySelector("[data-project-lightbox-close]");
const projectLinks = document.querySelectorAll(".projects-post-item > a");

const openProjectLightbox = function (imgSrc, imgAlt) {
  projectLightboxImg.setAttribute("src", imgSrc);
  projectLightboxImg.setAttribute("alt", imgAlt);
  projectLightboxCaption.textContent = imgAlt;
  elementToggleFunc(projectLightbox);
  document.body.style.overflow = "hidden";
}

const closeProjectLightbox = function () {
  projectLightbox.classList.remove("active");
  document.body.style.overflow = "";
}

for (let i = 0; i < projectLinks.length; i++) {
  projectLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    const img = this.querySelector(".projects-banner-box img");
    if (img) openProjectLightbox(img.getAttribute("src"), img.getAttribute("alt"));
  });
}

projectLightboxClose.addEventListener("click", closeProjectLightbox);

projectLightbox.addEventListener("click", function (event) {
  if (event.target === projectLightbox) closeProjectLightbox();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeProjectLightbox();
});
