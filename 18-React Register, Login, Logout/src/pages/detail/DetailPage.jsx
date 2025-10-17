import { useDispatch, useSelector } from "react-redux";
import "./DetailPage.css";
import { useEffect } from "react";
import { GetProducts } from "../../redux/features/productSlice";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const { id } = useParams();

  let findProduct = products.find((product) => product.id == id);

  useEffect(() => {
    dispatch(GetProducts());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="product-container">
          <div className="product-image">
            <img className="img" src={findProduct.image} alt="Product Image" />
          </div>

          <div className="product-details">
            <h4 className="product-title">{findProduct.title}</h4>
            <p className="product-category">Category: {findProduct.category}</p>
            <p className="product-price">${findProduct.price}</p>
            <p className="product-description">{findProduct.description}</p>

            <div className="product-rating">
              <span>⭐ {findProduct?.rating?.rate}</span>
              <span>( $ {findProduct?.rating?.count} reviews )</span>
            </div>

            <div className="quantity-selector">
              <button className="btn-minus">-</button>
              <input type="number" defaultValue="1" min="1" />
              <button className="btn-plus">+</button>
            </div>

            <button className="btn btn-danger add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
