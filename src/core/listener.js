import { activeItem, navScroll } from "./header";
import { navGroup } from "./selectors";

const listener = () => {
  document.addEventListener("scroll", navScroll);
  navGroup.addEventListener("click",activeItem);
};

export default listener;
