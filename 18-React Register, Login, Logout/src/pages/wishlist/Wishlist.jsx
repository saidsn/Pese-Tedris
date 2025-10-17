import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { AddWishlist } from "../../redux/features/wishlistSlice";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Your Wishlist</h1>
      <Table striped bordered hover>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {wishlist &&
            wishlist.map((product) => (
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
                <td>${product.price}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(AddWishlist(product))}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Link to={"/"}><MdKeyboardDoubleArrowLeft />Back</Link>
    </div>
  );
};

export default Wishlist;
