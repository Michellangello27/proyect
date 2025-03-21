const contenedor = document.querySelector('#subjects_cards');

const habilidades = [
    {
        icon: "./src/images/html-5.png",
        subject: "HTML",
    },
    {
        icon: "./src/images/css.png",
        subject: "CSS",
    },
    {
        icon: "./src/images/java-scripts.png",
        subject: "JAVASCRIPT",
    },
    {
        icon: "./src/images/react.png",
        subject: "REACT",
    },
    {
        icon: "./src/images/nextjs.png",
        subject: "NEXTJS",
    },
    {
        icon: "./src/images/nodejs.png",
        subject: "NODEJS",
    },
    {
        icon: "./src/images/tailwing.png",
        subject: "TAILWIND",
    },
    {
        icon: "./src/images/mongodb.png",
        subject: "MONGODB",
    },
];

/**
 * @description Funcion para insertar las tarjetas de las habilidades en el HTML
 * @param {Array} array - lista de habilidades con icon, subject
 * @param {Node} elementoHTML  - Elemento HTML que recibe las tarjetas en el documento HTML.
 */
function loadSubjectsCards(array, elementoHTML) {
    elementoHTML.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        const habilidad = array[i];
        const template = `
            <div class="text-center w-full h-32 border p-2 rounded-md border-gray-300 shadow-md text-sm flex flex-col justify-center">
                <img src="${habilidad.icon}" alt="${habilidad.subject}" width="32" class="mx-auto my-2">
                <h2 class="text-blue-500 font-bold">${habilidad.subject}</h2>
            </div>
        `;
        elementoHTML.innerHTML += template;
    }
}

// Llamada para insertar las tarjetas
loadSubjectsCards(habilidades, contenedor);