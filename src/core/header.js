import { header, navGroup } from "./selectors";

export const navScroll = () => {
  console.log("hi");
  if (window.scrollY > 0) {
    header.classList.add("bg-white/30");
  } else {
    header.classList.remove("bg-white/30");
  }
};

export const activeItem = (e) => {
  if (e.target.classList.contains("nav-item")) {
    navGroup.querySelector("li.active")?.classList?.remove("active");
    e.target.classList.add("active");
  }
};
