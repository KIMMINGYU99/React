const Title = (props) => {
  const { title } = props;
  return (
    <div
      style={{
        width: "80px",
        backgroundColor: "green",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
      }}
    >
      {title}
    </div>
  );
};

export default Title;
