const Img = (props) => {
  const { firstImg, secondImg } = props;
  const imgsize = { width: "70px", height: "70px", objectFit: "cover" };
  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <img style={imgsize} src={firstImg} alt="" />
      <span style={{ fontSize: "25px", fontWeight: "bold", color: "grey" }}>
        VS
      </span>
      <img style={imgsize} src={secondImg} alt="" />
    </div>
  );
};

export default Img;
