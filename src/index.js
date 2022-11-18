// MixItUp module
import mixitup from "mixitup";

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// Styles
import "./assets/style/style.css";
/*=============== SHOW SIDEBAR ===============*/

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */

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

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/
