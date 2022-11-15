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

/*===== Link Active Work =====*/

/*===== Work Popup =====*/

/*=============== SERVICES MODAL ===============*/

/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== INPUT ANIMATION ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/
