
//==========================================================
// mobile menu

let wrapperFixed = document.querySelector(".wrapper")
let mobileMenu = document.querySelector(".nav_mobile_menu");
let mainMenu = document.querySelector(".nav");

console.log(mobileMenu)
console.log(mainMenu)

mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active_menu");
    if (mobileMenu.classList.contains("active_menu")) {
        wrapperFixed.classList.add("wrapperNoScroll")
        mainMenu.classList.add("active_menu")
    } else {
        mainMenu.classList.remove("active_menu");
    }
})
//==========================================================
// topFooter adaptive list

// window.addEventListener("resize", (event) => {
//     console.log(event)
// });
let listTitle = document.querySelectorAll(".topFooter_list_title");
let listUl = document.querySelectorAll(".topFooter_list_ul");

listTitle.forEach((item) => {
    item.addEventListener("click", function (e) {
        const id = e.target.id
        // console.log(listUl)
        let currentUl = [...listUl].find((el) => {
            const isContains = el.classList.contains(id)
            return isContains

        })
        // let currentUl = document.getElementsByClassName(`topFooter_list_ul ${id}`)[0];
        listUl.forEach((list) => {
            list.classList.remove("active_ul")
        })
        currentUl.classList.toggle("active_ul")
        // currentUl.classList.remove("active_ul")



    })
})


// let currentUl = [...listUl].find((el) => {
//     const isContains = el.classList.contains(id)
//     return isContains
// })
// let currentUl = [...listUl].find((el) => el.classList.contains(id))

let filtred = (item) => item > 2
const arr = [1, 2, 3]
const filterArr = arr.filter(filtred)
const filterArr2 = arr.filter((item) => item > 2)