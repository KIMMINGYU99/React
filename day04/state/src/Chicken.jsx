import { useState } from "react";

const Chicken = (props) => {
  const menuArr = [
    {
      name: "바닐라크림콜드브루",
      price: 5500,
    },
    {
      name: "아메리카노",
      price: 2000,
    },
    {
      name: "프라푸치노",
      price: 3500,
    },
    {
      name: "화이트초코",
      price: 4500,
    },
    {
      name: "카페라떼",
      price: 4000,
    },
  ];

  const [num, setNum] = useState(1);
  const next = () =>
    setNum((prev) => {
      if (prev == menuArr.length) {
        alert("마지막임");
        return prev;
      } else return prev + 1;
    });
  const before = () =>
    setNum((prev) => {
      if (prev == 1) {
        alert("처음임");
        return prev;
      } else return prev - 1;
    });

  return (
    <div
      style={{
        width: "500px",
        display: "flex",
        gap: "10px",
        justifyContent: "space-between",
      }}
    >
      <button onClick={before}>이전 메뉴</button>
      <span>{menuArr[num - 1].name}</span>
      <span>{menuArr[num - 1].price}</span>
      <button onClick={next}>다음 메뉴</button>
    </div>
  );
};

export default Chicken;
