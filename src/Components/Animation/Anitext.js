import "./Animation.css";
import Calendar from "./calendar.png";
import Correct from "./icons8-correct-100.png";

function Anitext() {
  return (
    <div className="aniText">
      <p id="anit">
        Learn the right way to Trade Markets. Learn the art of investing wisely
        & responsibly.
      </p>
      <p>
        <span>The 15 Minute Trader</span> MASTERCLASS
      </p>

      <div className="anibox">
        <img alt="Calendar" src={Calendar} />
        <p>
          Every Saturday
          <br />
          7:30 PM
        </p>
      </div>

      <div className="aniclass">
        <p>
          Learn <span>Narbheram Sadhu's</span> Proprietary System For:
        </p>
        <div id="aniclasst">
          <p>
            <img alt="Correct" src={Correct} /> Banknifty Future
          </p>
          <p>
            <img alt="Correct"  src={Correct} /> Banknifty Options Buying
          </p>
          <p>
            <img  alt="Correct" src={Correct} /> Banknifty Options Selling
          </p>
          <p>
            <img alt="Correct"  src={Correct} /> Forex : USD/INR
          </p>
          <p>
            <img alt="Correct"  src={Correct} /> Risk Management
          </p>
        </div>
      </div>
    </div>
  );
}

export default Anitext;
