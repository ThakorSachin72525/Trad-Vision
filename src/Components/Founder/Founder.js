// Founder.jsx
import React from 'react';
import FounderImg from './founder.jpg';
import DirectorImg from './dir.png';
import './Founder.css'; // Import the CSS file

function Founder() {
  return (
    <div className="founder-container">
      <div className="founder-box">
        <h2>Founder</h2>
        <p className="founder-name">Narbheram Sadhu</p>
        <img src={FounderImg} alt="Founder" className="founder-image" />
        <p className="founder-description">
          The platform’s founder is a seasoned trader with a decade of diverse trading experience, including full-time intraday and forex trading.
        </p>
      </div>

      <div className="director-box">
        <h2>Director</h2>
        <p className="director-name">Prem Sadhu</p>
        <img src={DirectorImg} alt="Director" className="director-image" />
        <p className="director-description">
          Our director, with a rich blend of academic and industry experience, brings a...
        </p>
      </div>
    </div>
  );
}

export default Founder;
