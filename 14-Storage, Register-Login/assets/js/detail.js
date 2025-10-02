(async function GetData() {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  CreateDetailContainer(data);
})();

let url = new URLSearchParams(location.search);
let id = url.get("id");

function CreateDetailContainer(products) {
  let findProduct = products.find((product) => product.id == id);

  let productContainer = document.querySelector(".product-container");

  productContainer.innerHTML = `
        <div class="product-image">
              <img class="img" src="${findProduct.image}" alt="Product Image" />
            </div>

            <div class="product-details">
              <h4 class="product-title">${findProduct.title}</h4>
              <p class="product-category">Category: ${findProduct.category}</p>
              <p class="product-price">$${findProduct.price}</p>
              <p class="product-description">${findProduct.description}</p>

              <div class="product-rating">
                <span>⭐ ${findProduct.rating.rate}</span>
                <span>(${findProduct.rating.count} reviews)</span>
              </div>

              <div class="quantity-selector">
                <button class="btn-minus">-</button>
                <input type="number" value="1" min="1" />
                <button class="btn-plus">+</button>
              </div>

              <button class="btn btn-danger add-to-cart-btn">
                Add to Cart
              </button>
        </div>
    `;
}
