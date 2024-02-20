import { selectors } from "./selectors.js";
import { elements } from "./elements.js";

export const functions = {
  /**
   * Render a specific element on the page a specific number of times by appending it to a parent element
   * @param {HTMLElement} parent 
   * @param {element as string} element 
   * @param {number of elements} number 
   */
  renderElement(parent, element, number) {
    Array.from({ length: number }).forEach(() => (parent.innerHTML += element));
  },
  /**
   * Check the slider buttons to see if they should be disabled or not
   */
  checkSliderBtns() {
    if (selectors.sliderImages[0].classList.contains("active"))
      selectors.sliderPreviousBtn.classList.add("disabled");
    else selectors.sliderPreviousBtn.classList.remove("disabled");

    if (
      selectors.sliderImages[
        selectors.sliderImages.length - 1
      ].classList.contains("active")
    )
      selectors.sliderNextBtn.classList.add("disabled");
    else selectors.sliderNextBtn.classList.remove("disabled");
  },
  /**
   * Go to a specific image in the slider by pressing on the dots
   */
  goToImage() {
    const activeImage = document.querySelector("img.active");
    const activeDot = document.querySelector(".slider__dots span.active");
    const index = Array.from(selectors.sliderImages).indexOf(activeImage);
    selectors.sliderImagesContainer.scrollLeft =
      activeImage.clientWidth * index + 16 * index;
    activeDot.classList.remove("active");
    selectors.sliderDots[index].classList.add("active");
    functions.checkSliderBtns();
  },
  /**
   * Like a service by clicking on the heart icon
   * @param {Event} e 
   * @returns {void}
   */
  likeService(e) {
    const img = e.target.querySelector("img");
    if (
      e.target.classList.contains("empty__heart__icon") ||
      img?.classList?.contains("empty__heart__icon")
    ) {
      (img || e.target).outerHTML = elements.filledHeart;
      return;
    }

    (img || e.target).outerHTML = elements.emptyHeart;
  },
  /**
   * Select an add-on by clicking on the circle icon
   * @param {Event} e 
   * @returns 
   */
  selectAddOn(e) {
    if (e.target.classList.contains("empty__circle__icon")) {
      e.target.outerHTML = elements.filledCircle;
      return;
    }

    e.target.outerHTML = elements.emptyCircle;
  },
  /**
   * Select all add-ons by clicking on the select all button
   * @returns {void}
   */
  selectAllAddOns() {
    const addOnBtns = document.querySelectorAll(
      ".add__on__list .add__on__btn img"
    );
    if (selectors.selectAllAddOnsBtn.textContent === "Select All") {
      selectors.selectAllAddOnsBtn.textContent = "Unselect All";
      addOnBtns.forEach((img) => (img.outerHTML = elements.filledCircle));
      return;
    }

    selectors.selectAllAddOnsBtn.textContent = "Select All";
    addOnBtns.forEach((img) => (img.outerHTML = elements.emptyCircle));
  },
  /**
   * Add a comment to the reviewers list by clicking on the add comment button
   * @param {Event} event 
   */
  addComment(event) {
    event.preventDefault();
    const comment = selectors.commentInput.value;
    selectors.reviewersList.innerHTML += elements.reviewerCard(comment, "now");
    selectors.commentInput.value = "";
  },
};
