
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden"); 
    mobileMenu.classList.remove("translate-x-full"); 
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
    setTimeout(() => mobileMenu.classList.add("hidden"), 300);
});


document.addEventListener("click", (event) => {
if (!menuBtn.contains(event.target) && !mobileMenu.contains(event.target) && event.target !== closeBtn) {
    mobileMenu.classList.add("translate-x-full");
    setTimeout(() => mobileMenu.classList.add("hidden"), 300);
    }
});
