import Match from "../match/Match";

function App() {
  return (
    <Match
      date={"03.03"}
      day={"월"}
      time={"14:00"}
      firstImg={
        "http://image.toast.com/aaaaab/ticketlink/TKL_5/Soccer_KL1_Seoul.png"
      }
      secondImg={"http://image.toast.com/aaaaab/ticketlink/TKL_5/Gimcheon.png"}
      firstTeam={"FC 서울"}
      secondTeam={"김천"}
      place={"서울월드컵경기장"}
      btnDate={"2025.02.26"}
      btnDay={"수"}
      btnTime={"18:00"}
    />
  );
}

export default App;
