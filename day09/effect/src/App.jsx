import { useEffect, useState } from "react";
import ProductsCard from "./card";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((v) =>
        setProducts((prev) => {
          console.log(v);
          return v.products;
        })
      );
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "10px",
      }}
    >
      {products.map((v) => {
        return <ProductsCard {...v} />;
      })}
    </div>
  );
}

export default App;
