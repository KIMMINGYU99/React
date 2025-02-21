import { LuHotel } from "react-icons/lu";
import { IoCarOutline } from "react-icons/io5";
import { MdOutlinePointOfSale } from "react-icons/md";
import { TbAirBalloon } from "react-icons/tb";
import { IoCardOutline } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";


const Service = (props) => {
  const iconArr = [
    <LuHotel />,
    <IoCarOutline />,
    <MdOutlinePointOfSale />,
    <TbAirBalloon />,
    <IoCardOutline />,
    <FaWifi />,
  ];
  return (
    <article
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          border: "1px solid black",
          width: "100px",
          height: "100px",
          borderRadius: "9999px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "40px",
        }}
      >
        {iconArr[props.iconNum]}
      </div>
      <span style={{ textAlign: "center", fontWeight: "700" }}>
        {props.name}
      </span>
    </article>
  );
};

export default Service;
