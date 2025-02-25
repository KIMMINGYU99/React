const Review = (props) => {
  const { text } = props;
  return <span style={{ color: "grey", fontSize: "30px" }}>{text}</span>;
};

export default Review;
