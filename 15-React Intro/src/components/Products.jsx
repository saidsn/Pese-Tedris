import Button from "./Button";
import Product from "./Product";

let products = [
  { name: "telefon", price: 23 },
  { name: "Komp", price: 11 },
];

let car = "BMV";

const Products = () => {
  return (
    <>
      {products.map((product, index) => (
        <Product key={index} product={product} avto={car} />
      ))}
    </>
  );
};

export default Products;
