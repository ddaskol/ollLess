/* 8
 == string
 == number
 == boolean
 == null
 == undefined
 == oblect
 == Symbol
 == Bigint
//___________________________________________________________________//
 alfa(nameDog1, weightDog1);
 alfa(nameDog2, weightDog2);
 alfa(nameDog3, weightDog3);

 let num = prompt("ddd");

 function calcCube(n) {
 return n ** 3
 }
 console.log(calcCube(num))
//
    знидка 20%  у змінній
    валюта грн - змінна
    запитати ціну за товар
    в консоль ціна товару зі знижкою
//
 let sales = 20;
 let valuta = "grivnas";
 let alfa = 1;
 function calcPriceWithSales() {
     let productPrice = +prompt("Введіть вартість товару");
     let productPriceWithSales = productPrice - (productPrice * sales / 100);
     console.log(`Price ${alfa++} with sales ${productPriceWithSales}${valuta}`)
 }
 calcPriceWithSales()
 calcPriceWithSales()
 calcPriceWithSales()
 calcPriceWithSales()
 let user = {
     name: "Petro",
     age: 20,
     surname: "Taste",......
     phoneNumber: 1234567koom,lll0k0l˚;=]/-;]\\ngt,\,8
 }
 console.log(user['name']);

let userAge = prompt("Ваш вік?");
if (userAge == "18") {
    alert("Вам 18")
} else if (userAge == "25") {
    alert("Вам 25");
} else if (userAge => "30"); {
    alert("Вам пізда");
}
5000grn (user paste)
20% per year
6 month
 //___________________________________________________________________//

 function foo(a, b, c) {
     if (c) {
         if (a > b) {
             return a
         } else {
             return b
         }
     } else {
         if (a < b) {
             return a
         } else {
             return b
         }
     }
 }

 console.log(foo(5, 4, false)) */
//___________________________________________________________________//


/*
    console.log(user["field user"])
    console.log(user[1 + 2]);
    // delete user.name (this work) === видалення властивості
    console.log(user);
    // delete user.name (non work)
    // = перевірка наявності властивості
    console.log(user.hasOwnProperty("dfsc"))
    console.log(Object.keys(user))
    console.log(Object.values(user))
    console.log(Object.entries(user))
*/
/*
    user.sayHi = function () {
        console.log("Hi " + this.name)
    }
    user.sayHi()

    //___________________________________________________________________//
    var a = 5;

    function test() {
        console.log(this)
        console.log(this.a)
    }
    test()
*/

// console.log(user)
// for (let key in user) {
//     console.log(key + " " + user[key])
// }
//___________________________________________________________________//
/*
    FIRST HOMEWORK
    Прописати цикл for in, який виводить все правильно без skills= obj obj

    SECOND HW
    learn documentation
    for in learn
    object learn
    oblect asaight
*/
//___________________________________________________________________//

// let copy = user;

// copy.name = "Ivan";

// console.log(user.name)
// console.log(copy.name)
// ___________________________________________//
// function showName() {
//     console.log('Вася');
// }
// setTimeout(showName, 0);
// console.log('Петя!');

// showMessage();
// function showMessage() {
//     console.log('Сообщение');
// }
// showMessage();
// showMessage = function showMessage() {
//     console.log('fffffff');
// }

// let userInfo = {

// }
// console.log(userInfo);
// userInfo.name = "Dima";
// userInfo.age = 33;
// console.log(userInfo);
// userInfo.name = "alfa"
// console.log(userInfo)
// delete userInfo.name;
// console.log(userInfo)

//======================================//
//______________________________________LESSON 16_____________________________//
// let user = {
//     name: "Petro",
//     age: "20",
//     surname: "Alfa",
//     phonenumber: 99988887777664,
//     skills: {
//         alfa: 3,
//         beta: 4,
//         delta: 5,
//     }
// }


// for (let key in user) {
//     if (typeof user[key] === "object") {
//         for (let i in user[key]) {
//             console.log(i + " = " + user[key][i])
//         }
//     } else {
//         console.log(key + " = " + user[key])
//     }
// }
//___________________________________________________________________//

// ЦиклиЦиклиЦиклиЦиклиЦиклиЦиклиЦиклиЦиклиЦиклиЦиклиЦиклиЦиклиЦикли

// 1) While
// 2) do while
// 3) for 

// for (let i = 0; i <= 10; i++) {
//     console.log(i++);
// }
// for (let a = 2; a <=  10; a++) {
//     if (a % 2 == 0) {
//         console.log(a)
//     }
// }
//___________________________________________________________________//

// let expensesNumber = +prompt("Введіть кількість категорій витрат за місяць?", "");
// let expenses = {};
// for (let i = 1; i <= expensesNumber; i++) {
//     let expensesKey = prompt("Введіть назву категорії");
//     let expensesValue = +prompt("Ввудіть скільки коштів ви витратили?");
//     expenses[expensesKey] = expensesValue;

// }
// function totalExpenses(object) {
//     let total = 0;

//     for (let key in object) {
//         total += object[key]
//     }
//     return total;
// }
// console.log(expenses)
// let myExpenses = totalExpenses(expenses);

// console.log(`За минулий січяцб ви витратили ${myExpenses} грн.`)
//___________________________________________________________________//
// let user = new Array()
// let cities = ["Kyiv", "Lviv", "London"];

// // cities.shift("");
// // cities.unshift("");

// // cities.push("");
// // cities.pop("")
// // console.log(cities.reverse())

// // let arr = cities.join(" | ");
// // console.log(arr)

// // let citiesArr = prompt("Введіть міста через кому");
// // let arr = citiesArr.split(",");
// // console.log(arr);

// // let arr = cities.slice(1,2)
// // console.log(arr)

// let arr = cities.splice(1, 0, "Paris", "Tokio")
// console.log(cities)
// console.log(arr)
//___________________________________________________________________//

// Number ttr hw

// let numOne = 1.005 + Number.EPSILON;
// let numGo = Math.round(numOne * 100) / 100;
// console.log(numGo);

// // console.log(numOne * 100);
// // console.log(Math.round(numOne * 100));

// let numAlfa = parseFloat("135.77px");
// console.log(numAlfa);
// console.log(typeof numAlfa);

// let value = 58 + "Frilancer";
// if (parseFloat(value)) {
//     console.log(value);
// }

// console.log(Math.max(10, 58, 39, -150, 0))

// let BestNum = Math.floor(58.858);
// console.log(BestNum);


//___________________________________________________________________//

//  StringTTR

// let cities = ["Kyiv", "Lviv", , , "Lugansk"]

// // cities.forEach(el => {
// //     console.log(el)
// // })

// // cities.forEach(function (city) {
// //     console.log(city)
// // })

// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i])
// }

//___________________________________________________________________//

//HW 1
//1)Спитати користовуча числа через кому. 
//2)Потім їх відсортувати
// let numbers = prompt("Введіть числа через кому?")
// let numArray = numbers.split(',')

// console.log(numArray.sort());
//після цього метод sort сортує значення по першій цифрі. тому буде 1,12,22,3,55,6
//щоб це виправити, ми прописуємо фцію:

// let numbers = prompt("Введіть числа через кому?")
// let numArray = numbers.split(',')

// console.log(numArray.sort(compareNum));

// function compareNum(b, a) {
//     return a - b;
// }
//таким чином ця функція сортує значення від меншого до більшого. Щоб відсортувати від більшого до меншого, треба  аргументи функції поміняти місцями a-b на b-a

//___________________________________________________________________//

//HW2
//прописати функцію, яка виведе всі !непарні числа від а до b
// прописати перевірку на те, щоб а було менше ніж b
// let numFunc = +prompt("")
// let numFun = +prompt("")
// function rangeNum(a, b) {
//     if (b > a) {
//         for (let i = a; i <= b; i++) {
//             if (i % 2 !== 0) {
//                 console.log(i)
//             } // ця частина і робюить вивід суто непарних чисел
//         }
//     } else {
//         console.log("значення b має бути бальше a")
//         // перевірка на те, щоб а була менше ніж b
//     }
// }
// rangeNum(numFunc, numFun) //запускаємо функцію з аргументами
// console.log(typeof (numFunc))
//__________________LESSONS18181818181818181818181818LESSONS_________________________________________________//
//__________________LESSONS18181818181818181818181818LESSONS_________________________________________________//
//__________________LESSONS18181818181818181818181818LESSONS_________________________________________________//
//1) Метод filter=========
// let users = [

//     {
//         name: "Ivan",
//         age: 20
//     },
//     {
//         name: "Maria",
//         age: 18
//     },
//     {
//         name: "Petro",
//         age: 30
//     },
//     {
//         name: "Dima",
//         age: 45
//     }
// ];

// let usersWhithAge20 = users.filter((user) => user.age >= 20)

// console.log(usersWhithAge20)


// //2) Метод map ========

// let names = users.map(function (user) {
//     user.city = "Kyiv"
//     return { ...user }
// })
// console.log(names)

// //3) Метод reduce()

// let allUsersAge = users.reduce((sum, user) => {
//     return sum + user.age
// }, 0)

// console.log(allUsersAge)b[1]


// let a = ["World"];
// let b = a;
// a[1] = "Hello";
// b[1] = 'hhh ';
// console.log(a)
// console.log(b)



//___________________________________________________________________//

//Методи Рядків===========ʼʼ

// let str = "Hello world, lorem ipsum";

// console.log(str.toLowerCase())

//___________________________________________________________________//

//======HW1 LESSON 18=======//
// let mess = "сівсіостолівсишіситшівос івсістшівитсшівотсшівгсів сівшсгиівшоствшрисвіщсві івосиівшстовілдсшівсі істівшщгостівростівсівлосівс"

// function trimString(str, maxlength) {
//     if (str.length >= maxlength) {
//         let newStr = str.substring(0, maxlength) + "...";
//         return newStr;
//     } else {
//         str
//     }
// }
// console.log(trimString(mess, 110))

//======HW2 LESSON 18=======//

// let numUser = +prompt("")

// function numCheck(randomNumber) {
//     let num = Math.trunc(randomNumber);
//     if (num % 2 == 0) {
//         console.log(`Число ${num} парне`)
//     } else {
//         console.log(`Число ${num} непарне`)
//     }
// }

// numCheck(Math.random() * 100)


//======HW3 LESSON 18=======//

// let userLink = prompt("Paste your links for checks format")

// function checkLink(url) {
//     let link = url.startsWith("https");
//     if (link) {
//         console.log("Good")
//     } else {
//         console.log(" NOT Good")
//     }
// }

// checkLink(userLink)

//_________________LESSONS19__________________________________________________//


// console.log(document.documentElement)
// console.log(document.body)
// console.log(document.children)
// console.log(document.body.children[0].children[2])
// console.log(document.body.firstElementChild)
// console.log(document.body.previousElementSubling)
// console.log(document.body.firstElementChild.nextElementSibling)
// console.log(document.body.firstElementChild.nextElementSibling.parentElement)

// let liSecond = document.getElementById("second");
// console.log(liSecond); //пошукПоId одного елемента

// let li = document.getElementsByTagName("li");
// console.log(li); //пошукПо назві тега багато елементів

// let redElements = document.getElementsByClassName('red');
// console.log(redElements) //пошук по .class елементів

// let list = document.querySelectorAll(".red");
// console.log(list); //пошук по селектору, тому класс пишеться з точкою

// li = document.querySelector("#second");
// console.log(li);




// _________________LESSONS20202020202020__________________________________________________

// let list = document.querySelectorAll(".red");
// console.log(list)

/*
let li = document.querySelector('#second');
console.log(li.textContent)
li.innerHTML = "<h1>Hello</h1>"
*/
/*
let li = document.querySelector('#second');
console.log(li);
li.textContent = "hello" // не можна прописцвати теги як в innerHTML
*/
/*
let li = document.querySelector('#second');
console.log(li.hasAttribute('class '))
li = document.querySelector('#second');
console.log(li.hasAttribute('id')) //перевірка, чи є якиййсь атрибут
*/
/*
let li = document.querySelector('#second');
console.log(li.getAttribute('id')) // отримати Значення атрибуту
*/
/*
let li = document.querySelector('#second');
console.log(li.setAttribute('class', 'test')) //додати атрибут
*/
/*
let li = document.querySelector('#second');
console.log(li.removeAttribute("id")) // видалення атрибуту
*/
/*
let h6 = document.createElement("h6");
h6.innerHTML = "hellohhh6";
document.body.append(h6); //    додали елемент на сторінку в кінець(append)
*/
/*
let h6 = document.createElement("h6");
h6.innerHTML = "hellohhh6";
document.body.prepend(h6); // додали елемент на початок (prepend)
*/
/*
let ul = document.querySelector("ul");
let h6 = document.createElement("h6");
h6.innerHTML = "hellohhh6";
ul.prepend(h6); // додаємо елемент на початок конкретного елементу
*/
/*
let ul = document.querySelector("ul");
let h6 = document.createElement("h6");
h6.innerHTML = "hellohhh6";
ul.before(h6); // виводимо перед елементом (before)
*/
/*
let ul = document.querySelector("ul");
let h6 = document.createElement("h6");
h6.innerHTML = "hellohhh6";
ul.after(h6); //виводимо після елемента одразу (after)
*/
/*
let ul = document.querySelector("ul");
let h6 = document.createElement("h6");
h6.innerHTML = "hellohhh6";
h6.remove //видалення елемента
*/

//______ПОДІЇ____EVENT_______LESSONS20202020202020__________________________________________________

// let h1 = document.querySelector("h1");
/*
h1.onclick = function () {
    alert("Hello h1")
} // при кліку виводить вікно

h1.onclick = function () {
    alert("gg h1")
} //  не виводить першу подію, якщо вона вже є(недолік цього способу)
*/
/*
function hi(name) {
    alert("Hello" + name)
}
h1.addEventListener("click", function () { //обробник подій(млжна передавати декілька подій)
    alert("Hello www")
})

h1.addEventListener("click", hi.bind(null, " Ivan")) // пишеио назву фції без дужок 
//обробник подій(млжна передавати декілька подій)
 // цей найпопулярніший спосіб
*/
/*
h1.addEventListener("click", function (e) {
    let target = e.target
    target.style.backgroundColor = 'red';
}) // змін.ємо через фцію при кліку фоновий колдір 
*/
/*
let li = document.querySelectorAll("li");
console.log(li);

li.forEach((item) => {
    item.addEventListener("click", function (e) {
        let target = e.target;
        console.log(target)
        target.style.backgroundColor = 'red';
    })
})
*/

let ul = document.querySelector("ul");
console.log(ul);

ul.addEventListener("click", function (e) {
    let target = e.target;
    let h1 = ul.querySelector("h1");
    if (target === h1) {
        target.style.backgroundColor = "red";
    } else {
        target.style.backgroundColor = "green";
    }
})