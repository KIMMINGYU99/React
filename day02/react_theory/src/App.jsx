import Button from "./Button";
import Insta from "./Insta";
import Price from "./Price";
import Sausage from "./Sausage";
import Service from "./Service";

function App() {
  return (
    <>
      <article
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Insta cnt={"54"} list={"Posts"} />
        <Insta cnt={"834"} list={"Followers"} />
        <Insta cnt={"162"} list={"Following"} />
      </article>
      <Price price={92} discount={0.12} />
      <div style={{ display: "flex", gap: "30px" }}>
        <Service iconNum={0} name={"호텔"} />
        <Service iconNum={1} name={"렌터카"} />
        <Service iconNum={2} name={"공항 편의"} />
        <Service iconNum={3} name={"액티비티"} />
        <Service iconNum={4} name={"금융 여행자보험"} />
        <Service iconNum={5} name={"OTT & WIFI"} />
      </div>
    </>
  );
}

export default App;
