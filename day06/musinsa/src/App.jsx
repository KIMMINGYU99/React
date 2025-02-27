import { useState } from "react";
import Price from "./price";
import { list } from "./List";

function App() {
  const [cntArr, setCntArr] = useState(Array(list.length).fill(1));

  const plus = (i, max) =>
    setCntArr((prev) => {
      const newArr = [...prev];
      newArr[i] = newArr[i] >= max ? newArr[i] : newArr[i] + 1;
      return newArr;
    });

  const minus = (i) =>
    setCntArr((prev) => {
      const newArr = [...prev];
      newArr[i] = newArr[i] == 1 ? 1 : newArr[i] - 1;
      return newArr;
    });
  const reset = (i) =>
    setCntArr((prev) => {
      const newArr = [...prev];
      newArr[i] = 1;
      return newArr;
    });

  const totalPrice = list.reduce((a, c, i) => a + c.price * cntArr[i], 0);
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {list.map((v, i) => {
          return (
            <Price
              title={v.title}
              price={v.price.toLocaleString()}
              cnt={cntArr[i]}
              plusFunc={() => plus(i, v.max)}
              minusFunc={() => minus(i)}
              resetFunc={() => reset(i)}
            />
          );
        })}
      </div>
      <span>총액 : {totalPrice.toLocaleString()} 원</span>
    </div>
  );
}

export default App;
