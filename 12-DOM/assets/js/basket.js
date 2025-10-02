let basketProducts = JSON.parse(localStorage.getItem("products"));

let basketContainer = document.querySelector(".basket_container");

basketProducts.forEach((product) => {
  basketContainer.innerHTML += `
    <div class="card" style="width: 18rem">
        <img
          src=${product.image}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="price">${product.price}</p>
          <p class="card-text">${product.desc}</p>
          <a href="#" class="btn btn-primary add_btn">Add basket</a>
        </div>
    </div>
     `;
});
