//habilidades.js
const contenedor = document.querySelector('#subjects_cards');
const skillImg = document.querySelector('#skill img'); 


const skills=[
    {
      "imagen:":"./src/images/html-5.png",
    },
    {
      "imagen:":"./src/images/css.png",
    },
    {
      "imagen:":"./src/images/java-script.png",
    },  
    {
      "imagen:":"./src/images/react.png",
    },
    {
      "imagen:":"./src/images/nextjs.png",
    },
    {
      "imagen:":"./src/images/nodejs.png",
    },
    {
      "imagen:":"./src/images/tailwing.png",
    },
    {
      "imagen:":"./src/images/mongodb.png",
    },
]

function loadSubjectsCards(array, itemHTML) {
  itemHTML.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
      const subject = array[i];
      const template = `
           <div class="w-24 h-38 mb-4 lg:mb-8 bg-deep-blue
                shadow-[6px_6px_10px_rgba(180,180,180,0.1)] border border-gray-800
                ring-1 ring-gray-500 rounded-md flex items-center justify-center
                transition-all duration-300 lg:hover:translate-y-1 lg:hoveer:shadow-md
                active:translate-y-1 active:shadow-md px-5">
                    <img src="${subject.imagen}">
                </div>
      `;
      itemHTML.innerHTML += template
  }
}
loadSubjectsCards (skills,contenedor);











/*
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

// Mostrar el menú correctamente en pantallas grandes
function checkScreenSize() {
    if (window.innerWidth >= 768) {
        mobileMenu.classList.remove("hidden", "translate-x-full");
        mobileMenu.classList.add("md:flex");
    } else {
        mobileMenu.classList.remove("md:flex");
        mobileMenu.classList.add("translate-x-full");
    }
}

// Ejecutar al cargar y al cambiar tamaño de pantalla
checkScreenSize();
window.addEventListener("resize", checkScreenSize);

// Eventos para el menú en móvil
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden", "translate-x-full");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
    setTimeout(() => mobileMenu.classList.add("hidden"), 300);
});

*/