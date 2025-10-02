document.addEventListener("DOMContentLoaded", () => {
  let users = JSON.parse(localStorage.getItem("users"));
  let currentUser = users.find((user) => user.isLogined == true);

  let currentUserBasketItems = currentUser.basket;

  function CreateBasketConatiner() {
    let basketElement = document.querySelector(".basket");
    basketElement.innerHTML = "";
    currentUserBasketItems.forEach((basketItem) => {
      basketElement.innerHTML += `
            <div class="basket-item">
                <div class="image">
                  <img
                    src=${basketItem.image}
                    alt="Product Image"
                  />
                </div>
                <h6 class="title">${basketItem.title}</h6>
                <p class="category">${basketItem.category}</p>
                <p class="price">$${basketItem.price}</p>
                <div class="count-area">
                  <button class="minus-btn" id=${basketItem.id} ${
        basketItem.count === 1 ? "disabled" : ""
      }>-</button>
                  <p class="count">${basketItem.count}</p>
                  <button class="plus-btn" id=${basketItem.id}>+</button>
                </div>
                <button class="btn btn-danger remove-btn" id=${
                  basketItem.id
                }>Remove</button>
            </div>
        `;
    });

    let removeBtns = document.querySelectorAll(".remove-btn");

    removeBtns.forEach((btn) => {
      btn.addEventListener("click", DeleteBasketItem);
    });

    function DeleteBasketItem(e) {
      let basketItemId = parseInt(e.target.id);

      let currentBasketItemIndex = currentUserBasketItems.findIndex(
        (item) => item.id == basketItemId
      );

      currentUserBasketItems.splice(currentBasketItemIndex, 1);

      currentUser.basket = currentUserBasketItems;

      localStorage.setItem("users", JSON.stringify(users));

      CreateBasketConatiner();
      TotalPayment();
    }

    let plusBtns = document.querySelectorAll(".plus-btn");

    plusBtns.forEach((btn) => {
      btn.addEventListener("click", Increment);
    });

    function Increment(e) {
      let productId = parseInt(e.target.id);

      let countElem = e.target.parentElement.querySelector(".count");
      let minusBtn = e.target.parentElement.querySelector(".minus-btn");

      let existProduct = currentUserBasketItems.find(
        (product) => product.id == productId
      );

      if (existProduct) {
        existProduct.count++;
        countElem.textContent = existProduct.count;

        currentUser.basket = currentUserBasketItems;
        localStorage.setItem("users", JSON.stringify(users));

        TotalPayment();
      }

      if (existProduct.count > 1) {
        minusBtn.disabled = false;
      }
    }

    let minusBtns = document.querySelectorAll(".minus-btn");

    minusBtns.forEach((btn) => {
      btn.addEventListener("click", Decrement);
    });

    function Decrement(e) {
      let productId = parseInt(e.target.id);

      let countElem = e.target.parentElement.querySelector(".count");
      let minusBtn = e.target.parentElement.querySelector(".minus-btn");

      let existProduct = currentUserBasketItems.find(
        (product) => product.id == productId
      );

      if (existProduct && existProduct.count > 1) {
        existProduct.count--;
        countElem.textContent = existProduct.count;

        currentUser.basket = currentUserBasketItems;
        localStorage.setItem("users", JSON.stringify(users));

        TotalPayment();
      }

      if (existProduct.count == 1) {
        minusBtn.disabled = true;
      }
    }
  }

  function TotalPayment() {
    let totalElement = document.querySelector(".total-price");

    let payment = currentUserBasketItems.reduce(
      (acc, product) => acc + product.price * product.count,
      0
    );

    totalElement.textContent = payment.toFixed(2);
  }

  TotalPayment();
  CreateBasketConatiner();
});
