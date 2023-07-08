// // розібратися як воно прац.є ще раз

// let tabItems = document.querySelectorAll(".tab_title_item");
// let tabContent = document.querySelectorAll(".tab_content");
// let tabsWrap = document.querySelector(".tab_title_items");

// function hideTabsContent() {
//     tabContent.forEach(tab => {
//         tab.classList.add("hide");
//         tab.classList.remove("show");
//     })
//     tabItems.forEach(item => {
//         item.classList.remove("active");
//     })
// }
// function showTabsContent(i = 0) {
//     tabContent[i].classList.add("show");
//     tabContent[i].classList.remove("hide");
//     tabItems[i].classList.add("active");
// }
// hideTabsContent()
// showTabsContent()


// tabsWrap.addEventListener("click", function (e) {
//     // let target = e.target;


//     if (e.target.classList.contains("tab_title_item")) {
//         tabItems.forEach((item, i) => {
//             if (e.target == item) {
//                 hideTabsContent()
//                 showTabsContent(i)
//             }
//         })
//     }
// })

//====================================================================================//

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function show(text) {
    alert(text)
};

ask('Ти сьогожні працював на Бюро?',
    () => show('топ'),
    () => show('---')
);


