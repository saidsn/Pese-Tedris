import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DropDown from "../../utils/DropDown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrapper = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { basket } = useSelector((state) => state.basket);

  let wishlistCount = wishlist.length;

  let basketCount = basket.reduce((acc, product) => acc + product.count, 0);

  return (
    <div
      className="wrapper"
      style={{ display: "flex", alignItems: "center", gap: "7px" }}
    >
      <Link to={"./wishlist"}>
        <FavoriteIcon style={{ cursor: "pointer" }} fontSize="medium" />
        <sup>{wishlistCount}</sup>
      </Link>
      <Link to={"./basket"}>
        <ShoppingBasketIcon style={{ cursor: "pointer" }} fontSize="medium" />
        <sup>{basketCount}</sup>
      </Link>
      <DropDown />
    </div>
  );
};

export default Wrapper;
