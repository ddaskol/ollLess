// mobile menu

let mobileMenu = document.querySelector(".nav_mobile_menu");
let mainMenu = document.querySelector(".nav")

mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active_menu");
    if (mobileMenu.classList.contains("active_menu")) {
        mainMenu.classList.add("active_menu")
    } else {
        mainMenu.classList.remove("active_menu");
    }
})