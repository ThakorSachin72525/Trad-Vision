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
          <p style={{ color: '#666', marginBottom: '20px' }}>Prem Sadhu</p>

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
            The founder of our platform, is a seasoned trader with over 25 years of experience in the stock market. He started his journey in the financial world right after graduating from the University of Mumbai with a degree in Finance.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ color: '#333', marginBottom: '10px' }}>Director</h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>Director's Name</p>

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
            Our director, with a rich background in both academia and industry, brings a unique perspective to our platform. After earning a Ph.D. in Economics from the London School of Economics, they spent several years teaching at a prestigious university.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Founder
