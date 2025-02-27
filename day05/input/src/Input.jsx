import { useState } from "react";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <input onChange={(e) => setInputValue((prev) => e.target.value)} />
      <span>{inputValue.length}</span>
    </>
  );
};

export default Input;
