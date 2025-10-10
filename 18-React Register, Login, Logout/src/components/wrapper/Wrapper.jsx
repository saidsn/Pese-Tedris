import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DropDown from "../../utils/DropDown";

const Wrapper = () => {
  return (
    <div
      className="wrapper"
      style={{ display: "flex", alignItems: "center", gap: "7px" }}
    >
      <FavoriteIcon style={{ cursor: "pointer" }} fontSize="medium" />
      <ShoppingBasketIcon style={{ cursor: "pointer" }} fontSize="medium" />
      <DropDown />
    </div>
  );
};

export default Wrapper;
