document.addEventListener("DOMContentLoaded", async () => {
  async function GetData() {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    return data;
  }

  let products = await GetData();

  let filteredProducts = [...products];

  let usernameBtn = document.querySelector(".username");
  let users = JSON.parse(localStorage.getItem("users"));
  let curentUser = users.find((user) => user.isLogined == true);
  let registerBtn = document.querySelector(".register");
  let loginBtn = document.querySelector(".login");
  let logoutBtn = document.querySelector(".logout");
  let userIndex = users.findIndex((user) => user.isLogined == true);
  let basket = curentUser?.basket;

  let cards = document.querySelector(".cards");

  //filter by title
  let azBtn = document.querySelector(".az");
  let zaBtn = document.querySelector(".za");

  function SortByAz() {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    cards.innerHTML = "";
    CreateProductContainer(filteredProducts);
  }

  function SortByZa() {
    filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
    cards.innerHTML = "";
    CreateProductContainer(filteredProducts);
  }

  azBtn.addEventListener("click", SortByAz);
  zaBtn.addEventListener("click", SortByZa);

  // search by title
  let searchInput = document.querySelector(".search-input");
  let searchBtn = document.querySelector(".search-btn");

  searchInput.addEventListener("keyup", SearchProductByInputKeyUp);

  function SearchProductByInputKeyUp() {
    let serachInputValue = searchInput.value.trim();
    filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(serachInputValue.toLowerCase())
    );
    cards.innerHTML = "";
    CreateProductContainer(filteredProducts);
  }

  // searchInput.addEventListener("change", SerachProductByInputChange);

  // function SerachProductByInputChange() {
  //   let serachInputValue = searchInput.value.trim();
  //   filteredProducts = products.filter((product) =>
  //     product.title.toLowerCase().includes(serachInputValue.toLowerCase())
  //   );
  //   cards.innerHTML = "";
  //   CreateProductContainer(filteredProducts);
  // }

  // function SearchProductByBtn() {
  //   cards.innerHTML = "";
  //   let serachInputValue = searchInput.value.trim();
  //   filteredProducts = products.filter((product) =>
  //     product.title.toLowerCase().includes(serachInputValue.toLowerCase())
  //   );
  //   CreateProductContainer(filteredProducts);
  // }

  // searchBtn.addEventListener("click", SearchProductByBtn);

  //filter by price
  let lowToHigh = document.querySelector(".low-to-high");
  let highToLow = document.querySelector(".high-to-low");

  function SortByLow() {
    cards.innerHTML = "";
    filteredProducts.sort((a, b) => a.price - b.price);
    CreateProductContainer(filteredProducts);
  }

  function SortByHigh() {
    cards.innerHTML = "";
    filteredProducts.sort((a, b) => b.price - a.price);
    CreateProductContainer(filteredProducts);
  }
  lowToHigh.addEventListener("click", SortByLow);
  highToLow.addEventListener("click", SortByHigh);

  // Update User status
  function UpdateUserStatus() {
    let isLogin = users.find((user) => user.isLogined == true);
    usernameBtn.textContent = isLogin?.username || "Username";
    if (isLogin) {
      loginBtn.classList.add("d-none");
      registerBtn.classList.add("d-none");
      logoutBtn.classList.remove("d-none");
    } else {
      loginBtn.classList.remove("d-none");
      registerBtn.classList.remove("d-none");
      logoutBtn.classList.add("d-none");
    }
  }
  UpdateUserStatus();

  //Create Container
  function CreateProductContainer(products) {
    products &&
      products.forEach((product) => {
        cards.innerHTML += `
            <div class="card" data-id=${product.id}>
              <div class="card-image">
                <img
                  src=${product.image}
                  alt="Fjallraven Backpack"
                />
              </div>
              <div class="card-content">
                <h2 class="card-title">${product.title.slice(0, 20)}...</h2>
                <p class="card-category">${product.category}</p>
                <div class="card-footer">
                  <span class="card-price">$${product.price}</span>
                  <div class="card-rating">
                    <span>⭐ ${product.rating.rate}</span>
                    <span>(${product.rating.count} reviews)</span>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary add-to-cart" id=${
                product.id
              }>Add Basket</button>
            </div>
    `;
      });

    let allCards = document.querySelectorAll(".card");

    allCards.forEach((card) => {
      card.addEventListener("click", ShowDetail);
    });

    function ShowDetail(e) {
      let id = parseInt(e.currentTarget.dataset.id);
      window.location.href = `product-detail.html?id=${id}`;
    }

    let addBtns = document.querySelectorAll(".add-to-cart");
    addBtns.forEach((btn) => {
      btn.addEventListener("click", AddBasket);
    });

    function AddBasket(e) {
      e.stopPropagation();
      let productId = parseInt(e.target.id);
      if (!curentUser) {
        SweetToast("Please login to basket");
      }

      let findProduct = basket.find((product) => product.id == productId);

      if (findProduct) {
        findProduct.count++;
      } else {
        let existProduct = products.find((product) => product.id == productId);
        basket.push({ ...existProduct, count: 1 });
      }

      users[userIndex].basket = basket;
      localStorage.setItem("users", JSON.stringify(users));
      SweetToast("Product add success basket");
      BasketCount();
    }

    function BasketCount() {
      let basketItemCount = basket.reduce(
        (acc, product) => acc + product.count,
        0
      );
      let basketCountElement = document.querySelector(".basketIcon sup");
      basketCountElement.textContent = basketItemCount;
    }
    BasketCount();
  }
  CreateProductContainer(filteredProducts);

  //Logout
  function Logout() {
    if (curentUser) {
      curentUser.isLogined = false;
      localStorage.setItem("users", JSON.stringify(users));
      UpdateUserStatus();
    }
  }
  logoutBtn.addEventListener("click", Logout);
});

function SweetToast(text) {
  Toastify({
    text: `${text}`,
    duration: 3000,
    close: true,
    gravity: "top",
    positionLeft: true,
  }).showToast();
}
