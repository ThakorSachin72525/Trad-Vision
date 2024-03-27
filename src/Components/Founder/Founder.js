import React from 'react'
import FounderImg from './founder.jpg'
import DirectorImg from './dir.png'

function Founder() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      backgroundColor: '#f4f4f4', 
      padding: '20px', 
      borderRadius: '10px' 
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ color: '#333', marginBottom: '10px' }}>Founder</h2>
          <p style={{ fontWeight: "500", color: '#666', marginBottom: '20px' }}>Narbheram Sadhu</p>

          <img 
            src={FounderImg} 
            alt="Founder" 
            style={{ 
              borderRadius: '50%', 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover', 
              marginBottom: '20px' 
            }} 
          />

          <p style={{ color: '#666', textAlign: 'center' }}>
          The platform’s founder is a seasoned trader with a decade of diverse trading experience, including full-time intraday and forex trading.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ color: '#333', marginBottom: '10px' }}>Director</h2>
          <p style={{ fontWeight: "500", color: '#666', marginBottom: '20px' }}>Prem Sadhu</p>

          <img 
            src={DirectorImg} 
            alt="Director" 
            style={{ 
              borderRadius: '50%', 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover', 
              marginBottom: '20px' 
            }} 
          />

          <p style={{ color: '#666', textAlign: 'center' }}>
          Our director, with a rich blend of academic and industry experience, brings a unique perspective to our platform.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Founder
