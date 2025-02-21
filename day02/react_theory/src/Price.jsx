const Price = (props) => {
  const originalPrice = props.price.toFixed(2);
  const discountPrice = Math.round(
    (props.price * (100 - props.discount)) / 100
  ).toFixed(2);
  const krwPrice = Math.round((discountPrice * 1430) / 1000) * 1000;

  return (
    <article
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <span style={{ color: "grey", textDecoration: "line-through" }}>
        ${originalPrice}
      </span>
      <strong style={{ color: "red", fontWeight: "700", fontSize: "25px" }}>
        ${discountPrice}
      </strong>
      <span style={{ color: "grey" }}>
        (₩
        {krwPrice})
      </span>
    </article>
  );
};

export default Price;
