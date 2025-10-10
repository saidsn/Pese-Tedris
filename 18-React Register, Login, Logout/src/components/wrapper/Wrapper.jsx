import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DropDown from "../../utils/DropDown";
import { Link } from "react-router-dom";

const Wrapper = () => {
  return (
    <div
      className="wrapper"
      style={{ display: "flex", alignItems: "center", gap: "7px" }}
    >
      <Link to={"./wishlist"}>
        <FavoriteIcon style={{ cursor: "pointer" }} fontSize="medium" />
      </Link>
      <ShoppingBasketIcon style={{ cursor: "pointer" }} fontSize="medium" />
      <DropDown />
    </div>
  );
};

export default Wrapper;
