import "./Product.css";
import { Button } from "react-bootstrap";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { AddWishlist } from "../../redux/features/wishlistSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="heart-icon">
        <CiHeart onClick={() => dispatch(AddWishlist(product))} />
      </div>
      <div className="card-image">
        <img src={product.image} alt="Fjallraven Backpack" />
      </div>
      <div className="caButtonrd-content">
        <h2 className="card-title">{product.title.slice(0, 20)}...</h2>
        <p className="card-category">{product.category}</p>
        {/* <p className="card-description">
          Your perfect pack for everyday use and walks in the forest.
        </p> */}
        <div className="card-footer">
          <span className="card-price">${product.price}</span>
          <div className="card-rating">
            <span>⭐ {product.rating.rate}</span>
            <span>({product.rating.count} reviews)</span>
          </div>
        </div>
      </div>
      <Button className="add-to-cart" variant="primary">
        Add Basket
      </Button>
    </div>
  );
};

export default Product;
