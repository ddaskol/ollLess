// add to cart
//знаходимо потрібні елемнети в коді
let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".add__to_cart");

// при натисканні на кнопку - змінюється значення в корзині(спосіб 1)
for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function () {
        productsCountEl.textContent = +productsCountEl.textContent + 1; // ставимо '+', тому що від юзера ми отримуємо завжди в текстовому форматі
    })
}

//задача: при натисканні на "More Details" вилітає модальне вікно, яке можна закрити
// План:
// 1. Знайти всі кнопки "More Details"
// 2. Знайти модальне вікно
// 3. відкрити модальне вікно при натисканні на 'MD'
// 4. закрити модальне при натисканні на крестик
let modal = document.querySelector(".modal");
let moreDetailsBtns = document.querySelectorAll(".more_details");
let closeBtn = document.querySelector(".btn_close");
// console.log(modal)
// console.log(moreDetailsBtns)
// console.log(closeBtn)
for (let i = 0; i < moreDetailsBtns.length; i++) {
    moreDetailsBtns[i].addEventListener("click", function () {
        modal.classList.add("show");
        modal.classList.remove("hide");
    })
}
function openModal() {
    modal.classList.remove("hide");
    modal.classList.add("show");
}
function closeModal() {
    modal.classList.remove("show");
    modal.classList.add("hide");
}

closeBtn.addEventListener("click", closeModal)

modal.addEventListener("click", function (e) {
    if (e.target == modal) {
        closeModal()
    }
})

// hw2 при скролі вікна більше ніж на 50% щось роибити

//1. Дізнаємось висоту сторінки через властивість scrollHeight
console.log(window.pageYOffset)
console.log(document.body.scrollHeight)
//2. Пишемо ф-цію, яка буде відкривати модалку після скролу
function showModalByScroll() {
    if (window.pageYOffset > document.body.scrollHeight / 2) {
        openModal();
        window.removeEventListener("scroll", showModalByScroll)
    }

}
window.addEventListener("scroll", showModalByScroll);


// HW
// при натисканні на лайк - він зафарбовується і навпаки

// change like color click
//1. знайти всі кнопки лайк
//2. 

let addFavButtons = document.querySelectorAll(".bttn_add-fav");

//можна прописати або через ifElse:
// addFavButtons.forEach((btn) => {
//     btn.addEventListener("click", function () {
//         console.log(btn)
//         if (this.classList.contains("liked")) {
//             this.classList.remove("liked")
//         } else {
//             this.classList.add("liked")
//         }
//     })
// })

// або простіше прописати через метод toggle :
addFavButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
        this.classList.toggle("liked")
    })
})
