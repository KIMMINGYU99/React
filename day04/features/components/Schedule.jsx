const Schedule = (props) => {
  const { date, day, time } = props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <strong style={{ fontSize: "40px" }}>{date}</strong>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "13px",
          color: "grey",
        }}
      >
        <span>{"(" + day + ")"}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default Schedule;
