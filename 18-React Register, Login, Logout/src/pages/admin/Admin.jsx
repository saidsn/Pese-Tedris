import { Table } from "react-bootstrap";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useEffect, useState } from "react";
import {
  AddProduct,
  DeleteProduct,
  GetProducts,
} from "../../redux/features/productSlice";
import "./Admin.css";
import { useFormik } from "formik";
import { productSchema } from "../../schemas/product/ProductSchema";

const Admin = () => {
  const dispatch = useDispatch();
  let { products } = useSelector((state) => state.products);

  const [open, setOpen] = useState(false);

  const {
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
    errors,
  } = useFormik({
    initialValues: {
      image: "",
      title: "",
      category: "",
      price: "",
      description: "",
    },
    onSubmit: (values) => {
      dispatch(AddProduct(values));
    },

    validationSchema: productSchema,
  });

  const { image, title, category, price, description } = values;

  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);

  return (
    <div className="container">
      {open && (
        <form
          encType="multipart/form-data"
          className="form"
          onSubmit={() => {
            handleSubmit();
            setOpen(false);
          }}
        >
          <h3>Cerate Product</h3>
          <div className="">
            <label htmlFor="image">Image</label>
            <span className="text-danger">{errors.image}</span>
            <input
              type="url"
              className="form-control"
              id="image"
              name="image"
              onChange={handleChange}
              value={image}
            />
          </div>
          <div className="">
            <label htmlFor="title">Title</label>
            <div className="text-danger">{errors.title}</div>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={handleChange}
              value={title}
            />
          </div>
          <div className="">
            <label htmlFor="category">Category</label>
            <div className="text-danger">{errors.category}</div>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              onChange={handleChange}
              value={category}
            />
          </div>
          <div className="">
            <label htmlFor="price">Price</label>
            <div className="text-danger">{errors.price}</div>
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              onChange={handleChange}
              value={price}
            />
          </div>
          <div className="">
            <label htmlFor="description">Description</label>
            <div className="text-danger">{errors.description}</div>
            <textarea
              className="form-control"
              id="description"
              name="description"
              onChange={handleChange}
              value={description}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      )}

      <h1 style={{ textAlign: "center" }}>Admin panel</h1>
      <Button
        variant="contained"
        color="success"
        sx={{ my: 2 }}
        onClick={() => setOpen(!open)}
      >
        Create
      </Button>
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
          {products &&
            products.map((product) => (
              <tr
                style={{ textAlign: "center", verticalAlign: "middle" }}
                key={product.id}
              >
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
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{ textTransform: "none", padding: "3px 5px" }}
                    onClick={() => dispatch(DeleteProduct(product.id))}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Link to={"/"}>
        <MdKeyboardDoubleArrowLeft />
        Back
      </Link>
    </div>
  );
};

export default Admin;
