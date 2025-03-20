const botonToogle = document.querySelector("#menu-toggle-btn");
const navbar=document.querySelector("#navbar");

botonToogle.addEventListener("click",function(){
    navbar.classList.toggle("hidden");
});

/*
document.getElementById('#menu-toggle-btn').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    // Alternar la visibilidad del menú
    navbar.classList.toggle('hidden');
});
*/