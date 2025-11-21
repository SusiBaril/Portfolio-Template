let lastScroll = 0;
const navbar = document.getElementById("navbar");

// Show navbar when clicking any section
document.querySelectorAll("section").forEach(section => {
    section.addEventListener("click", () => {
        navbar.classList.remove("hide");
    });
});

// Existing scroll detection
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    navbar.classList.add("hide");  // hide when scrolling down
  } else {
    navbar.classList.remove("hide"); // show when scrolling up
  }

  lastScroll = currentScroll;
});


function email() {
    navigator.clipboard.writeText("rosaleskeegn@gmail.com")

    Toastify({
        text: "Copied to clipboard!",
        duration: 2000,
        gravity: "bottom", // top or bottom
        position: "right", // left, center, right
        close: true,
        style: {
            fontSize: "10px",
            background: "#c2d076",
            textColor: "#000000"
        }
    }).showToast();
}

function phone() {
    navigator.clipboard.writeText("0968-668-9357")

    Toastify({
        text: "Copied to clipboard!",
        duration: 2000,
        gravity: "bottom", // top or bottom
        position: "right", // left, center, right
        close: true,
        style: {
            fontSize: "10px",
            background: "#c2d076",
            textColor: "#000000"
        }
    }).showToast();
}
