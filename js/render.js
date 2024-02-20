import { elements } from "./elements.js";
import { selectors } from "./selectors.js";
import { functions } from "./functions.js";

/**
 * Render all the elements on the page
 * @return {void}
 */
export default function render() {
  functions.renderElement(selectors.servicesList, elements.serviceCard(), 3);
  functions.renderElement(selectors.addOnList, elements.addOn(), 3);
  functions.renderElement(selectors.reviewersList, elements.reviewerCard(), 3);
  functions.renderElement(selectors.suggestedServicesList, elements.suggestedServiceCard(), 4);
  functions.checkSliderBtns();
}
