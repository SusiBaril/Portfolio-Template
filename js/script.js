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


// Card Data

// const cardData = [
//     {
//         angle: "4deg",
//         img: "https://picsum.photos/id/21/200/300",
//         title: "Alejandro Escamilla",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque?"
//     },
//     {
//         angle: "-8deg",
//         img: "https://picsum.photos/id/30/200/300",
//         title: "Shyamanta Baruah",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque?"
//     },
//     {
//         angle: "-7deg",
//         img: "https://picsum.photos/id/39/200/300",
//         title: "Luke Chesser",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque?"
//     },
//     {
//         angle: "11deg",
//         img: "https://picsum.photos/id/103/200/300",
//         title: "Ilham Rahmansyah",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque?"
//     },
//     {
//         angle: "13deg",
//         img: "https://picsum.photos/id/175/200/300",
//         title: "petradr",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque?"
//     },
//     {
//         angle: "-17deg",
//         img: "https://picsum.photos/id/349/200/300",
//         title: "Caleb George",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque?"
//     },
//     {
//         angle: "20deg",
//         img: "https://picsum.photos/id/401/200/300",
//         title: "Austin Ban",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque?"
//     }
// ];

// const container = document.querySelector('.card');

// container.innerHTML = cardData.map((card, i) => {
//     const id = i + 1;
//     const total = cardData.length;

//     const prev = id === 1 ? total : id - 1;
//     const next = id === total ? 1 : id + 1;

//     return `
//         <input type="radio" id="radio-${id}" name="radio-card" ${id === 1 ? "checked" : ""}>
//         <article class="card" style="--angle:${card.angle}">
//             <img class="card-img" src="${card.img}">
//             <div class="card-data">
//                 <span class="card-num">${id}/${total}</span>
//                 <h2>${card.title}</h2>
//                 <p>${card.description}</p>
//                 <footer>
//                     <label for="radio-${prev}" aria-label="Previous">&#10094;</label>
//                     <label for="radio-${next}" aria-label="Next">&#10095;</label>
//                 </footer>
//             </div>
//         </article>
//     `;
// }).join('');
