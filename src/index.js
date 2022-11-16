import "./assets/style/style.css";
import mixitup from "mixitup";

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

/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== INPUT ANIMATION ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/
