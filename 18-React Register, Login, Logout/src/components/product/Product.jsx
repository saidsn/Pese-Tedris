import "./Product.css";
import { Button } from "react-bootstrap";
import { IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { AddWishlist } from "../../redux/features/wishlistSlice";
import { useEffect, useState } from "react";
import { Addbasket } from "../../redux/features/basketSlice";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [color, setColor] = useState(false);

  const { wishlist } = useSelector((state) => state.wishlist);

  let findProduct = wishlist.find((item) => item.id === product.id);

  useEffect(() => {
    setColor(!!findProduct);
  }, [wishlist, color]);

  return (
    <div
      className="card"
      onClick={() => {
        navigate(`./detailpage/${product.id}`);
      }}
    >
      <div className="heart-icon">
        <IoMdHeart
          style={{ color: color ? "red" : "black" }}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(AddWishlist(product));
          }}
        />
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
            <span>⭐ {product?.rating?.rate}</span>
            <span>({product?.rating?.count} reviews)</span>
          </div>
        </div>
      </div>
      <Button
        className="add-to-cart"
        variant="primary"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(Addbasket(product));
        }}
      >
        Add Basket
      </Button>
    </div>
  );
};

export default Product;
