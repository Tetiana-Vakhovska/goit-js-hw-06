
const allBtnRef = document.querySelector('[data-action="increment"]')

allBtnRef.addEventListener("click", (i = 0) => {
 i += 1
  console.log("Button was clicked");
});