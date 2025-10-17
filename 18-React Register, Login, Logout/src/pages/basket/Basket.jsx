import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import {
  Decrement,
  DeleteBasket,
  Increment,
} from "../../redux/features/basketSlice";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const Basket = () => {
  const { basket } = useSelector((state) => state.basket);

  const dispatch = useDispatch();

  let totalPayemt = basket.reduce(
    (acc, product) => (acc + product.price) * product.count,
    0
  );

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Your Basket</h1>
      <Table striped bordered hover>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Count</th>
            <th>Price</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {basket &&
            basket.map((product) => (
              <tr style={{ textAlign: "center" }} key={product.id}>
                <td>
                  <img
                    src={product.image}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      textTransform: "none",
                      padding: "0",
                      minWidth: "40px",
                    }}
                    onClick={() => dispatch(Decrement(product.id))}
                  >
                    -
                  </Button>
                  <span style={{ padding: "0 5px" }}>{product.count}</span>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      textTransform: "none",
                      padding: "0",
                      minWidth: "40px",
                    }}
                    onClick={() => dispatch(Increment(product.id))}
                  >
                    +
                  </Button>
                </td>
                <td>${product.price}</td>
                <td>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{ textTransform: "none", padding: "2px 5px" }}
                    onClick={() => dispatch(DeleteBasket(product.id))}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to={"/"}>
          <MdKeyboardDoubleArrowLeft />
          Back
        </Link>
        <h3 style={{ textAlign: "end" }}>
          Total payment: ${totalPayemt.toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default Basket;
