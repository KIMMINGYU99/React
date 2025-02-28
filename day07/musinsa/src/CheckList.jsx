const CheckList = ({ text, clickFunc, necessary }) => {
  return (
    <div>
      <input
        style={{
          width: "16px",
          height: "16px",
          backgroundColor: "grey",
          color: "grey",
        }}
        type="checkbox"
        onClick={clickFunc}
      />
      <span style={{ fontSize: "13px" }}>{text}</span>
      <span style={{ fontSize: "13px" }}>({necessary ? "필수" : "선택"})</span>
    </div>
  );
};

export default CheckList;
