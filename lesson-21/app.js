

//  по кнопці змін.ємо картинку на іншу і навпаки
let imgEl = document.querySelector("img");
let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let imgSrc = imgEl.getAttribute("src");
    if (imgSrc === "googleLogo.png") {
        imgEl.setAttribute("src", "reactLogo.png");

    } else {
        imgEl.setAttribute("src", "googleLogo.png");
    }
})
