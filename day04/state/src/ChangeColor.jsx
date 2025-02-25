import { useState } from "react";

const ChangeColor = (props) => {
  const colorArr = ["pink", "blue", "yellow"];
  const [num, setNum] = useState(0);
  const Change = () =>
    setNum((prev) => (prev == colorArr.length - 1 ? (prev = 0) : prev + 1));

  return (
    <div>
      <div
        style={{
          width: "300pv",
          height: "300px",
          backgroundColor: colorArr[num],
        }}
      ></div>
      <button onClick={Change}>색상 변경</button>
    </div>
  );
};

export default ChangeColor;
