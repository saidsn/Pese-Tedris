import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import "./ActionBar.css";
import {
  SortProductPrice,
  SortProductTitle,
  SearchProduct,
} from "../../redux/features/productSlice";
import { TextField } from "@mui/material";

const ActionBar = () => {
  const dispatch = useDispatch();

  const HandleSortAz = () => {
    dispatch(SortProductTitle("az"));
  };
  const HandleSortZa = () => {
    dispatch(SortProductTitle("za"));
  };

  const HandleSortLow = () => {
    dispatch(SortProductPrice("low"));
  };
  const HandleSortHigh = () => {
    dispatch(SortProductPrice("high"));
  };

  const HandleSearchProduct = (value) => {
    dispatch(SearchProduct(value));
  };

  return (
    <div className="action_bar">
      <div className="sort">
        <Button
          variant="outlined"
          sx={{ textTransform: "capitalize" }}
          onClick={HandleSortAz}
        >
          A-Z
        </Button>
        <Button
          variant="outlined"
          sx={{ textTransform: "capitalize" }}
          onClick={HandleSortZa}
        >
          Z-A
        </Button>
      </div>
      <TextField
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        size="small"
        onChange={(e) => HandleSearchProduct(e.target.value)}
      />
      <div className="sort">
        <Button
          variant="outlined"
          sx={{ textTransform: "capitalize" }}
          onClick={HandleSortLow}
        >
          Low-to-High
        </Button>
        <Button
          variant="outlined"
          sx={{ textTransform: "capitalize" }}
          onClick={HandleSortHigh}
        >
          High-to-Low
        </Button>
      </div>
    </div>
  );
};

export default ActionBar;
