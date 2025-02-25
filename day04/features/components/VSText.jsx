const VSText = (props) => {
  const { firstTeam, secondTeam } = props;
  return (
    <div style={{ display: "flex", gap: "10px", fontWeight: "bolder" }}>
      <span>{firstTeam}</span>
      <span>VS</span>
      <span>{secondTeam}</span>
    </div>
  );
};

export default VSText;
