let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    navbar.classList.add("hide");  // hide when scrolling down
  } else {
    navbar.classList.remove("hide"); // show when scrolling up
  }

  lastScroll = currentScroll;
});
