import { useState } from "react";
import Length from "./Length";
import Login from "./Login";
import Cnt from "./quiz";

function App() {
  const [inputValue, setInputValue] = useState("");

  const change = (e) => {
    setInputValue((prev) => {
      return e.target.value;
    });
  };
  const [numArray, setNumArray] = useState(Array(10).fill(0));

  const plus = (i) =>
    setNumArray((prev) => {
      const newArray = [...prev];
      newArray[i] = newArray[i] + 1;
      return newArray;
    });
  const minus = (i) =>
    setNumArray((prev) => {
      const newArray = [...prev];
      newArray[i] = newArray[i] > 0 ? newArray[i] - 1 : newArray[i];
      return newArray;
    });

  return (
    <>
      <Login vanilla={setInputValue} label={"Email"} />
      <Length length={inputValue.length} />
      <div></div>
      {numArray.map((v, i) => (
        <Cnt
          number={v}
          plusFunc={() => {
            plus(i);
          }}
          minusFunc={() => {
            minus(i);
          }}
        />
      ))}
      <span>{numArray.reduce((a, c) => a + c)}</span>
    </>
  );
}

export default App;
