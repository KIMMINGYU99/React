import { useState } from "react";
import CheckList from "./CheckList";
import Button from "./button";
import { musinsa } from "./musinsa";

function App() {
  const [arr, setArr] = useState([...musinsa]);
  const clickFunc = (i) =>
    setArr((prev) => {
      const newArr = [...prev];
      newArr[i].check = !newArr[i].check;
      return newArr;
    });

  const clickBtn = () => {
    if (arr[0].check == false) alert("14세 이상이 아님");
    else if (arr[1].check == false) alert("이용약관 동의 안함");
    else alert("본인인증하러가셈");
  };

  return (
    <>
      {arr.map((v, i) => (
        <CheckList {...v} clickFunc={() => clickFunc(i)} />
      ))}
      <Button
        clickBtn={clickBtn()}
        color={
          arr.filter((v) => v.necessary == true).every((v) => v.check == true)
            ? "white"
            : "grey"
        }
        backgroundColor={
          arr.filter((v) => v.necessary == true).every((v) => v.check == true)
            ? "black"
            : "#efefef"
        }
      />
    </>
  );
}

export default App;
