import DayTimeButton from "../Atoms/button/DayTimeButton";
import Image from "../Atoms/image/image";
import DayDateTimeText from "../Atoms/text/DateDayTimeText";
import PlaceText from "../Atoms/text/PlaceText";
import VsText from "../Atoms/text/VsText";

const Schedule = (props) => {
  return (
    <article
      style={{
        maxWidth: "90vw",
        margin: "0 auto",
        padding: "30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid grey",
      }}
    >
      <DayDateTimeText {...props} />
      <Image {...props} />
      <VsText {...props} />
      <PlaceText {...props} />
      <DayTimeButton {...props} />
    </article>
  );
};

export default Schedule;
