// let basliq = document.getElementById("head");
// console.log(basliq);

// let listItem = Array.from(document.getElementsByClassName("list-group-item"))

// listItem.forEach(element => {
//     console.log(element)
// });

// let header = Array.from( document.getElementsByTagName("h1"))

// header.map((item)=>console.log(item))

// let listItem = document.querySelectorAll("#head")

// listItem.forEach(element => {

//     console.log(element)
// });

// Dom elementleri uzerinde

// C--create +
// R--read   +
// U--update +
// D--delete +

// let list = document.querySelector(".list-group")

// let lastItem = list.children[4]

// list.removeChild(lastItem)

// lastItem.remove()

// let newLi = document.createElement("li")
// newLi.className = "list-group-item"
// newLi.textContent = "Yeni Li elementi"

// let list = document.querySelector(".list-group")
// let lastItem = list.children[4]

// lastItem.replaceWith(newLi)

// let newLi2 = document.createElement("li")
// newLi2.className = "list-group-item"
// newLi2.textContent = "Ikinci Li elementi"

// list.append(newLi)

let basketBtns = document.querySelectorAll(".add_btn");

let products = []

basketBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let card = btn.closest(".card");

    let image = card.querySelector(".card-img-top").src;
    let title = card.querySelector(".card-title").textContent;
    let price = card.querySelector(".price").textContent
    let desc = card.querySelector(".card-text").textContent;

    let product = {
      image,
      title,
      price,
      desc,
    };

    products.push(product)

    localStorage.setItem("products", JSON.stringify(products))
  });
});

