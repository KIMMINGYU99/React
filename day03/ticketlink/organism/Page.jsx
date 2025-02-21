import { ScheduleData } from "../dummy/ScheduleData";
import Schedule from "../Molecules/Schedule";

const Page = () => ScheduleData.map((v) => <Schedule {...v} />);

export default Page;
