import { selectors } from "./selectors.js";
import { setupEventListeners } from "./eventListeners.js";
import { functions } from "./functions.js";
import render from "./render.js";

/**
 * Setup all the event listeners to be called globally on the page
 * @return {void}
 */
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  window.addEventListener("click", (e) => {
    if (
      !selectors.userBtn.contains(e.target) &&
      !selectors.dropdownList.contains(e.target)
    )
      selectors.dropdownList.classList.add("hidden");
  });
  window.likeService = functions.likeService;
  window.selectAddOn = functions.selectAddOn;
  window.selectAllAddOns = functions.selectAllAddOns;
  window.addComment = functions.addComment;

  render();
});
