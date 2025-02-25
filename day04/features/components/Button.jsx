const Button = (props) => {
  const { btnDate, btnDay, btnTime } = props;
  const btnStyle = {
    backgroundColor: "transparent",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: "15px",
    padding: "5px 8px",
    border: "none",
  };
  return (
    <div
      style={{
        width: "200px",
        height: "70px",
        backgroundColor: "#e4e6e8",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        justifyContent: "center",
      }}
    >
      <button style={btnStyle}>{btnDate + " (" + btnDay + ")"}</button>
      <button style={btnStyle}>{btnTime + " 오픈예정"}</button>
    </div>
  );
};

export default Button;
