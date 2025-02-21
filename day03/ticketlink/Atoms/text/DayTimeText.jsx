import DayText from "./DayText";
import TimeText from "./TimeText";

const DayTimeText = (props) => {
  const { day, time } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <DayText day={day} />
      <TimeText time={time} />
    </div>
  );
};

export default DayTimeText;
