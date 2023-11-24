// Switch function
const switchTheme = () => {
  // Get Root Element and the data-theme value
  const rootElem = document.documentElement;
  let dataTheme = rootElem.getAttribute("data-theme"),
    newTheme;

  newTheme = dataTheme === "light" ? "dark" : "light";

  // Set the new HTML attribute
  rootElem.setAttribute("data-theme", newTheme);
};

// Add EventElement
document
  .querySelector("#theme-switcher")
  .addEventListener("click", switchTheme);

// https://youtu.be/Xk12JtYG8rw?si=xV4m2OQGTkyC_ONC
