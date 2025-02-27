const Price = (props) => {
  const { title, price, cnt, minusFunc, plusFunc, resetFunc } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "300px",
        border: "1px solid black",
        padding: "10px 20px",
      }}
    >
      <p>{title}</p>
      <span>{price} 원</span>
      <div
        style={{
          width: "80px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button onClick={minusFunc}>-</button>
        <span>{cnt}</span>
        <button onClick={plusFunc}>+</button>
        <button onClick={resetFunc}>reset</button>
      </div>
    </div>
  );
};

export default Price;
