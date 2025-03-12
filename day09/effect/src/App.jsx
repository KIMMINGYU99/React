import { useEffect, useState } from "react";
import ProductsCard from "./card";
import { useBoolean, useLocalStorage } from "usehooks-ts";
import MyCard from "./MyCard";
import { bearStore } from "./store";
function App() {
  const { increasePopulation } = bearStore();

  // const {value, toogle}=useBoolean(false)

  const [value, setValue, removeValue] = useLocalStorage("kim", 0);

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((v) =>
  //       setProducts((prev) => {
  //         console.log(v);
  //         return v.products;
  //       })
  //     );
  // }, []);

  return (
    // <div>
    //   <span>값:{value}</span>
    //   <button onClick={() => setValue((prev) => prev + 1)}>+</button>
    // </div>
    <div>
      <button onClick={increasePopulation}>곰돌이 분신술</button>
      <MyCard />
    </div>

    // <div
    //   style={{
    //     display: "grid",
    //     gridTemplateColumns: "repeat(5, 1fr)",
    //     gap: "10px",
    //   }}
    // >
    //   {products.map((v) => {
    //     return <ProductsCard {...v} />;
    //   })}
    // </div>
  );
}

export default App;
