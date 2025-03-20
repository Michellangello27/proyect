const project_card = document.querySelector('#proy-contenedor');

const projects = [
    {
        titulo: "Proyecto 1 ",
        descripcion: "Este proyecto fue desarrollado en",
        imagen: "./src/images/bootstrap.png",
    },
    {
        titulo: "Proyecto 2 ",
        descripcion: "Este proyecto fue desarrollado en",
        imagen: "./src/images/cplusplus.png",
    },
    {
        titulo: "Proyecto 3 ",
        descripcion: "Este proyecto fue desarrollado en",
        imagen: "./src/images/csharp.png",
    },
    {
        titulo: "Proyecto 4 ",
        descripcion: "Este proyecto fue desarrollado en",
        imagen: "./src/images/proy4.bmp",
    },
    {
        titulo: "Proyecto 5",
        descripcion: "Este proyecto fue desarrollado en",
        imagen: "./src/images/proy1.bmp",
    },
    {
        titulo: "Proyecto 6",
        descripcion: "Este proyecto fue desarrollado en",
        imagen: "./src/images/proy3.bmp",
    },
    {
        titulo: "Proyecto 7",
        descripcion: "Este proyecto fue desarrollado en",
        imagen: "./src/images/proy1.bmp",
    },
    {
        titulo: "Proyecto 8",
        descripcion: "Este proyecto fue desarrollado en",
        imagen: "./src/images/proy2.bmp",
    },
    {
        titulo: "Proyecto 9",
        descripcion: "Este proyecto fue desarrollado en",
        imagen: "./src/images/proy3.bmp",
    },
];

function loadProductsCards(items, element) {
    element.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
        const proy = items[i];
        console.log(proy);
        const template = `
        <div class="shadow-xl w-80 rounded-md border border-gray-200 cursor-pointer" role="product card">
            <figure class="w-full aspect-square overflow-hidden">
                <img src="${proy.imagen}" alt="nombre del proyecto" class="w-full object-cover ">
            </figure>
            <div aria-label="card content"
                class="px-4 pt-2 pb-4 border-t-1 flex flex-col gap-2 border-gray-300 text-gray-600">
                <h3 class="text-xl text-white">${proy.titulo}</h3>
                <p text-white>${proy.descripcion}</p>
            </div>
        </div>
        `;
        element.innerHTML += template;
    }
}

loadProductsCards(projects, project_card);

