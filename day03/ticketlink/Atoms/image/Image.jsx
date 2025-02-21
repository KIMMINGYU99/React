const Image = (props) => {
  const { firstImage, secImage } = props;
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        justifyContent: "center",
      }}
    >
      <img
        style={{ width: "70px", height: "70px", objectFit: "cover" }}
        src={firstImage}
        alt=""
      />
      <p style={{ fontSize: "18px" }}>vs</p>
      <img
        style={{ width: "70px", height: "70px", objectFit: "cover" }}
        src={secImage}
        alt=""
      />
    </div>
  );
};

export default Image;
