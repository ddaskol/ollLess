class Article {
    constructor(title, src, description, name, parent) {
        this.title = title;
        this.src = src;
        this.description = description;
        this.name = name;
        this.parent = document.querySelector(parent);

    }
    render() {
        let article = document.createElement("article");
        article.classList.add("col-6");
        article.innerHTML = `
            <div class="article">
                <h2 class="article_title">${this.title}</h2>
                <div class="article_img">
                    <img src=${this.src} alt="">
                </div>
                <div class="article_description">
                    ${this.description}
                </div>
                <div class="article_name">Author: ${this.name} </div>
            </div>
        `
        this.parent.append(article)
    }
}

//============= JSON //=============//=============//=============

fetch("db.json")
    .then(response => response.json())
    .then(data => (
        data.map((item) => (
            new Article(
                item.title,
                item.src,
                item.description,
                item.name,
                item.parent
            ).render()
        ))
    ))

//============= Робимо запит на сервер і витягуємо звідти аватар користувача
// через функці. привʼязуємо і її до кнопки на сторінці Клік //=============//=============//=============

function showAvatar() {
    fetch("https://api.github.com/users/ddaskol")
        .then(response => response.json())
        .then(user => {
            let img = document.createElement("img");
            let avatar = user.avatar_url;
            img.setAttribute("src", avatar);
            document.body.prepend(img)
        })
}

document.querySelector("button").addEventListener("click", showAvatar)


//============= constructor //=============//=============//=============
// new Article(
//     "News1",
//     "/lesson-25/images/bbcUkr.png",
//     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo at officia rerum, repella",
//     "Ivan",
//     ".articles").render()
// new Article(
//     "News2",
//     "/lesson-25/images/bbcUkr.png",
//     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo at officia rerum, repellat aspernatur eius modi beatae voluptatem maiores illo animi hic, deserunt dolorem tempore pariatur doloribus ullamveniam facere?",
//     "Ivan",
//     ".articles").render()
// new Article(
//     "News3",
//     "/lesson-25/images/bbcUkr.png",
//     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo at officia rerum, repella",
//     "Ivan",
//     ".articles").render()
// new Article(
//     "News 4",
//     "/lesson-25/images/bbcUkr.png",
//     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo at officia rerum, repella",
//     "Ivan",
//     ".articles").render()

// let user = {
//     name: 'Jack',
//     age: 20,
//     skills: {
//         html:10
//     }
// }
// console.log(JSON.parse(JSON.stringify(user)))


// console.log(1)

// setTimeout(() => {
//     console.log(2)
// }, 6000)

// console.log(3)

// setTimeout(() => {
//     console.log(4)
// }, 3000)


//=========== calc Contructor ============= //
// function Calculator() {

//     this.read = function () {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     };

//     this.sum = function () {
//         return this.a + this.b;
//     };

//     this.mul = function () {
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());