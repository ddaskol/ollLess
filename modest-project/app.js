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


let btnForm = document.querySelector(".touch_onOff_btn");
let activatedForm = document.querySelector(".alfa");

btnForm.addEventListener("click", function () {
    btnForm.classList.toggle("activeForm");
    if (btnForm.classList.contains("activeForm")) {
        activatedForm.classList.add("activeForm");
    } else {
        activatedForm.classList.remove("activeForm");
    }
})
