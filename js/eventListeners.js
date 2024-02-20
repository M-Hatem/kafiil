import { selectors } from "./selectors.js";
import { elements } from "./elements.js";
import { functions } from "./functions.js";

export const setupEventListeners = () => {
  /**
   * Hide the dropdown list when clicking outside of it
   */
  selectors.userBtn.addEventListener("click", () => {
    selectors.dropdownList.classList.toggle("hidden");
  });

  /**
   * Toggle the dark mode circle when clicking on the dark mode switch
   */
  selectors.darkModeSwitch.addEventListener("click", () => {
    selectors.darkModeCircle.classList.toggle("dark__mode__on");
  });

  /**
   * Increase the quantity of the purchase
   */
  selectors.increaseQuantityBtn.addEventListener("click", () => {
    const quantity = +selectors.quantityNumber.textContent;
    selectors.quantityNumber.textContent = quantity + 1;
    selectors.purchasePrice.textContent = `$${
      +selectors.quantityNumber.textContent * 100
    }`;
  });

  /**
   * Decrease the quantity of the purchase
   */
  selectors.decreaseQuantityBtn.addEventListener("click", () => {
    const quantity = +selectors.quantityNumber.textContent;
    if (quantity === 1) return;
    selectors.quantityNumber.textContent = quantity - 1;
    selectors.purchasePrice.textContent = `$${
      +selectors.quantityNumber.textContent * 100
    }`;
  });

  /**
   * Reset the quantity of the purchase to 1
   */
  selectors.purchaseBtn.addEventListener("click", () => {
    selectors.quantityNumber.textContent = 1;
    selectors.purchasePrice.textContent = `$${
      +selectors.quantityNumber.textContent * 100
    }`;
  });

  /**
   * Show more services when clicking on the see more button
   */
  selectors.seeMoreServicesBtn.addEventListener("click", () => {
    if (selectors.seeMoreServicesBtn.textContent === "see less") {
      Array.from({ length: 3 }).forEach(() => selectors.servicesList.removeChild(selectors.servicesList.lastChild));
      selectors.seeMoreServicesBtn.textContent = "see more";
      return;
    }

    Array.from({ length: 3 }).forEach(() => selectors.servicesList.innerHTML += elements.serviceCard());
    selectors.seeMoreServicesBtn.textContent = "see less";
  });

  /**
   * Show more suggested services when clicking on the see more button
   */
  selectors.seeMoreSuggestedServicesBtn.addEventListener("click", () => {
    if (selectors.seeMoreSuggestedServicesBtn.textContent === "see less") {
        Array.from({ length: 4 }).forEach(() => selectors.suggestedServicesList.removeChild(selectors.suggestedServicesList.lastChild));
      selectors.seeMoreSuggestedServicesBtn.textContent = "see more";
      return;
    }

    Array.from({ length: 4 }).forEach(() => selectors.suggestedServicesList.innerHTML += elements.suggestedServiceCard());
    selectors.seeMoreSuggestedServicesBtn.textContent = "see less";
  });

  /**
   * Switch to the next image in the slider
   */
  selectors.sliderNextBtn.addEventListener("click", () => {
    const activeImage = document.querySelector("img.active");
    selectors.sliderImagesContainer.scrollLeft += activeImage.clientWidth + 16;
    if (activeImage.nextElementSibling) {
      activeImage.classList.remove("active");
      activeImage.nextElementSibling?.classList?.add("active");
      functions.checkSliderBtns();
      functions.goToImage();
    }
  });

  /**
   * Switch to the previous image in the slider
   */
  selectors.sliderPreviousBtn.addEventListener("click", () => {
    const activeImage = document.querySelector("img.active");
    selectors.sliderImagesContainer.scrollLeft -= activeImage.clientWidth + 16;
    if (activeImage.previousElementSibling) {
      activeImage.classList.remove("active");
      activeImage.previousElementSibling?.classList?.add("active");
      functions.checkSliderBtns();
      functions.goToImage();
    }
  });

  /**
   * Go to a specific image in the slider by pressing on the dots
   */
  selectors.sliderDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const activeImage = document.querySelector("img.active");
      activeImage.classList.remove("active");
      selectors.sliderImages[index].classList.add("active");
      functions.goToImage();
    });
  });
};