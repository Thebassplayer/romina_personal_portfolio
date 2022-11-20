// MixItUp module
import mixitup from "mixitup";

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// Styles
import "./assets/style/style.css";

/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById("sidebar"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  navLinks = document.querySelectorAll(".nav__link");

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-sidebar");
  });
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
}

/*===== SIDEBAR HIDDEN =====*/
/*Close navMenu when clicking a navLink*/
navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
});

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[data-content]");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    /*Get the Node target with the data-target atribute*/
    const target = document.querySelector(tab.dataset.target);

    /*Clear all tabContents*/
    tabContent.forEach(tabContents => {
      tabContents.classList.remove("skills__active");
    });

    target.classList.add("skills__active");

    /*Clear all tabs*/
    tabs.forEach(tab => {
      tab.classList.remove("skills__active");
    });

    tab.classList.add("skills__active");
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach(l => l.classList.remove("active-work"));
  this.classList.add("active-work");
}
linkWork.forEach(l => l.addEventListener("click", activeWork));

/*===== Work Popup =====*/
const workButtons = document.querySelectorAll(".work__button");
const portfolioPopup = document.querySelector(".portfolio__popup");
const portfolioPopupInner = document.querySelector(".portfolio__popup-inner");
const portfolioPopupClose = document.querySelector(".portfolio__popup-close");

function togglePortfolioPopup() {
  portfolioPopup.classList.toggle("open");
}

workButtons.forEach(button =>
  button.addEventListener("click", e => {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  })
);

portfolioPopupClose.addEventListener("click", togglePortfolioPopup);
portfolioPopup.addEventListener("click", togglePortfolioPopup);
portfolioPopupInner.addEventListener("click", e => {
  e.stopPropagation();
});

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp__thumbnail img").src =
    portfolioItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML =
    portfolioItem.querySelector("work__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML =
    portfolioItem.querySelector("portfolio__item-details").innerHTML;
}
/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalContent = document.querySelectorAll(".services__modal-content"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

// Target proper modal when clicking View More button
let modal = modalClick => {
  modalViews[modalClick].classList.add("active__modal");
};

// View More event listeners
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

// X close button functionality
modalCloses.forEach(modalClose => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach(modalView => {
      modalView.classList.remove("active__modal");
    });
  });
});

// Modal close functionality
modalViews.forEach(modalView => {
  modalView.addEventListener("click", () => {
    modalView.classList.remove("active__modal");
  });
});

// Prevent closing when click on modal content

modalContent.forEach(mContent => {
  mContent.addEventListener("click", e => {
    e.stopPropagation();
  });
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper(".testimonials__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value === "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach(input => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// Get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// Event listenes for scrolling
window.addEventListener("scroll", navHighlihter);

function navHighlihter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Loop throght sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    /* - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation Link, else remove it
 - To know which link needs an active class, we use sectionId variable we are getting while we are looping througth sections as an selector */

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

/*=============== SHOW SCROLL UP ===============*/
