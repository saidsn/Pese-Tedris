import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../../redux/features/productSlice";
import Product from "../product/Product";
import "./Products.css";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProducts());
  }, []);

  return (
    <section id="products">
      <div className="container">
        <div className="row">
          <h3 className="head-title" style={{ textAlign: "center" }}>
            Products
          </h3>
          <div className="cards">
            {products &&
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
