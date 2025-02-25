const Place = (props) => {
  const { place } = props;
  return <span style={{ fontWeight: "bolder", color: "grey" }}>{place}</span>;
};

export default Place;
