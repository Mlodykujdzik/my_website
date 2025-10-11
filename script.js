window.addEventListener("hashchange", () => {
    setTimeout(afterPageLoad, 100);
});

window.addEventListener("load", () => {
    afterPageLoad();
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
    navItems.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});
