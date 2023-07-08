// add to cart
//знаходимо потрібні елемнети в коді
let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".add__to_cart");

// при натисканні на кнопку - змінюється значення в корзині(спосіб 1)
for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function () {
        productsCountEl.textContent = +productsCountEl.textContent + +countValue[i].value;
        return countValue[i].value = 1 // ставимо '+', тому що від юзера ми отримуємо завжди в текстовому форматі
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




// change product count ============================================================

let decrBtns = document.querySelectorAll(".decr_button");
let incrBtns = document.querySelectorAll(".incr_button");
let countValue = document.querySelectorAll(".product_count input");

// let minCount = 1;
// let maaxCount = 5;

// for (let i = 0; i < countValue.length; i++) {
//     let cerrentCount = +countValue[i].value;
//     toggleBtnsState(cerrentCount, decrBtns[i], incrBtns[i])

// }

// function toggleBtnsState(count, decrBtn, incrBtn) {
//     decrBtn.disabled = count <= minCount;
//     incrBtn.disabled = count >= maaxCount;
// }

// //====================зміна кількості на + ===============//
// for (let i = 0; i < incrBtns.length; i++) {
//     incrBtns[i].addEventListener("click", function () {
//         let cerrentCount = +countValue[i].value;
//         let nextCount = cerrentCount + 1;
//         countValue[i].value = nextCount;

//         toggleBtnsState(nextCount, decrBtns[i], incrBtns[i])

//     })
// }

// //=============== зміна кількості на - ===============//
// for (let i = 0; i < decrBtns.length; i++) {
//     decrBtns[i].addEventListener("click", function () {
//         let cerrentCount = +countValue[i].value;
//         let nextCount = cerrentCount - 1;
//         countValue[i].value = nextCount;

//         toggleBtnsState(nextCount, decrBtns[i], incrBtns[i])
//     })
// }



// реалізація задачі вище шляхом застосування фцій конструкторів

// ===================  hw: прописати зміну через конструктор для всіх елементів  ===============//

function Counter(incrBtn, decrBtn, inputField, minCount = 1, maxCount = 5) {

    this.domRefs = {
        incrBtn,
        decrBtn,
        inputField,
    }
    this.toggleBtnsState = function () {
        let count = this.domRefs.inputField.value;
        this.domRefs.decrBtn.disabled = count <= minCount;
        this.domRefs.incrBtn.disabled = count >= maxCount;
    }
    this.toggleBtnsState()

    this.incr = function () {
        let cerrentCount = +this.domRefs.inputField.value;
        let nextCount = cerrentCount + 1;
        this.domRefs.inputField.value = nextCount;

        this.toggleBtnsState()
    }
    this.decr = function () {
        let cerrentCount = +this.domRefs.inputField.value;
        let nextCount = cerrentCount - 1;
        this.domRefs.inputField.value = nextCount;

        this.toggleBtnsState()
    }

    this.domRefs.incrBtn.addEventListener("click", this.incr.bind(this));
    this.domRefs.decrBtn.addEventListener("click", this.decr.bind(this));

}
const counters = [];

countValue.forEach((counterItem, i) => (
    counters[i] = new Counter(incrBtns[i], decrBtns[i], counterItem)
))

// const counters = countValue.map((counterItem, i) => {
//     return new Counter(incrBtns[i], decrBtns[i], counterItem)
// });




//================ => function ===========//


//================ calculator ===========//
// let calculator = {

//     read() {
//         this.a = +prompt("Введіть число a");
//         this.b = +prompt("Введіть число b")
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }
// }
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

//================ calculator with new Func ===========//
// class Calculator {
//     constructor() {
//         this.read = function () {
//             this.a = +prompt("a");
//             this.b = +prompt("b");
//         };
//         this.sum = function () {
//             return this.a + this.b;
//         };
//         this.mul = function () {
//             return this.a * this.b;
//         };
//     }
// }
// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

//====================  accumulator bookHW====================

class Accumulator {
    constructor(startingValue) {
        this.value = startingValue;
        this.read = function () {
            this.value = this.value + +prompt("a");
        };
    }
}
let accumulator = new Accumulator(2);
accumulator.read();
accumulator.read();
accumulator.read();

alert(accumulator.value);

//====================================================
function readNumber() {
    let num;

    do {
        num = prompt("hgfds?")
    } while (!isFinite(num))

    if (num === null || num === '') return null;

    return +num
}
alert(`aaa is
 ${readNumber()}`)
//====================================================
function random(min, max) {
    Math.random(min, max)
}
alert(random(2, 3))
//====================================================
//====================================================
//====================================================

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this
//     },
//     down() {
//         this.step--;
//         return this

//     },
//     showStep: function () { // показує поточний крок
//         alert(this.step);
//         return this

//     }
// };

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0


//================ sliderOn ===========//

$(".slider_block").slick({
    dots: true
});








