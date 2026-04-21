import { useEffect, useState } from "react";
import ProductContainer from "./ProductContainer";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCat, setSelectedCat] = useState("Show all Products");
  const categories = ["Show all Products", ...new Set(products.map((item) => item.category))];

  const filteredProduct =
    selectedCat === "Show all Products"
      ? products
      : products.filter((item) => item.category === selectedCat);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      });
  }, []);

  return (
    <>
      <h1>Product Fetch & Filter</h1>
      <hr />
      <h2>
        Current Category: {selectedCat} , Amount : {filteredProduct.length}{" "}
      </h2>
      <div>
        {categories.map((item) => (
          <button key={item} onClick={() => setSelectedCat(item)}>
            {item}
          </button>
        ))}
      </div>
      <hr />
      <ProductContainer products={filteredProduct} />
      <hr />
      {/* <pre>{JSON.stringify(products[0], null, 2)}</pre> */}
    </>
  );
}

export default App;
