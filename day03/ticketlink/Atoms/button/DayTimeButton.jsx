import DayButton from "./DayButton";
import TimeButton from "./TimeButton";

const DayTimeButton = (props) => {
  const { buttonDay, buttonTime } = props;
  return (
    <div
      style={{
        padding: "10px 34px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#e4e6e8",
        borderRadius: "10px",
      }}
    >
      <DayButton day={buttonDay} />
      <TimeButton time={buttonTime} />
    </div>
  );
};

export default DayTimeButton;
